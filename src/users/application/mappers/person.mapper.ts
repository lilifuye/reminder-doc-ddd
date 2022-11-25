import { RegisterPerson } from '../messages/commands/register-person.command';
import { PersonName } from 'src/shared/domain/values/person-name.value';
import { Dni } from 'src/shared/domain/values/dni.value';
import { AuditTrail } from 'src/shared/domain/values/audit-trail.value';
import { DateTime } from 'src/shared/domain/values/date-time.value';
import { PersonClientDto } from '../dtos/response/person-client.dto';
import { RegisterPersonRequest } from '../dtos/request/register-person-request.dto';
import { RegisterPersonResponse } from '../dtos/response/register-person-response.dto';
import { Person } from 'src/users/domain/aggregates/client/person.entity';
import { PersonFactory } from 'src/users/domain/factories/person.factory';
import { PersonEntity } from 'src/users/infrastructure/persistence/entities/person.entity';
import { PersonNameValue } from 'src/users/infrastructure/persistence/values/person-name.value';
import { DniValue } from 'src/users/infrastructure/persistence/values/dni.value';
import { AuditTrailValue } from 'src/shared/infrastructure/values/audit-trail.value';
import { ClientId } from 'src/users/domain/aggregates/client/client-id.value';


export class PersonMapper {
  public static dtoRequestToCommand(registerPersonRequest: RegisterPersonRequest) {
    return new RegisterPerson(
      registerPersonRequest.firstName,
      registerPersonRequest.lastName,
      registerPersonRequest.dni,
    );
  }

  public static domainToDtoResponse(person: Person) {
    return new RegisterPersonResponse(
      person.getId().getValue(),
      person.getName().getFirstName(),
      person.getName().getLastName(),
      person.getDni().getValue(),
      person.getAuditTrail().getCreatedAt().format(),
      person.getAuditTrail().getCreatedBy().getValue()
    );
  }
  
  public static commandToDomain(command: RegisterPerson, userId: number): Person {
    const personName: PersonName = PersonName.create(command.firstName, command.lastName);
    const dni: Dni = Dni.create(command.dni);
    const auditTrail: AuditTrail = AuditTrail.from(
      DateTime.utcNow(),
      ClientId.of(userId),
      null,
      null
    );
    let person: Person = PersonFactory.from(personName, dni, auditTrail);
    return person;
  }

  public static domainToEntity(person: Person): PersonEntity {
    const personEntity: PersonEntity = new PersonEntity();
    personEntity.name = PersonNameValue.from(person.getName().getFirstName(), person.getName().getLastName());
    personEntity.dni = DniValue.from(person.getDni().getValue());
    const createdAt: string = person.getAuditTrail() != null && person.getAuditTrail().getCreatedAt() != null ? person.getAuditTrail().getCreatedAt().format() : null;
    const createdBy: number = person.getAuditTrail() != null && person.getAuditTrail().getCreatedBy() != null ? person.getAuditTrail().getCreatedBy().getValue() : null;
    const updatedAt: string = person.getAuditTrail() != null && person.getAuditTrail().getUpdatedAt() != null ? person.getAuditTrail().getUpdatedAt().format() : null;
    const updatedBy: number = person.getAuditTrail() != null && person.getAuditTrail().getUpdatedBy() != null ? person.getAuditTrail().getUpdatedBy().getValue() : null;
    const auditTrailValue: AuditTrailValue = AuditTrailValue.from(createdAt, createdBy, updatedAt, updatedBy);
    personEntity.auditTrail = auditTrailValue;
    return personEntity;
  }

  public static entityToDomain(personEntity: PersonEntity): Person {
    if (personEntity == null) return null;
    const personName: PersonName = PersonName.create(personEntity.name.firstName, personEntity.name.lastName);
    const dni: Dni = Dni.create(personEntity.dni.value);
    const auditTrail: AuditTrail = AuditTrail.from(
      personEntity.auditTrail.createdAt != null ? DateTime.fromString(personEntity.auditTrail.createdAt) : null,
      personEntity.auditTrail.createdBy != null ? ClientId.of(personEntity.auditTrail.createdBy) : null,
      personEntity.auditTrail.updatedAt != null ? DateTime.fromString(personEntity.auditTrail.updatedAt) : null,
      personEntity.auditTrail.updatedBy != null ? ClientId.of(personEntity.auditTrail.updatedBy) : null
    );
    const clientId: ClientId = ClientId.of(personEntity.id);
    let person: Person = PersonFactory.withId(clientId, personName, dni, auditTrail);
    return person;
  }

  public static ormToPersonClientDto(row: any): PersonClientDto {
    let dto = new PersonClientDto();
    dto.id = Number(row.id);
    dto.firstName = row.firstName;
    dto.lastName = row.lastName;
    dto.dni = row.dni;
    return dto;
  }
}