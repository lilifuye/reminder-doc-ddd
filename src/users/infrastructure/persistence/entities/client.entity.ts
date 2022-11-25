
import { AuditTrailValue } from 'src/shared/infrastructure/values/audit-trail.value';
import { ClientType } from 'src/users/domain/aggregates/client/client-type.enum';
import { Column, Entity, PrimaryGeneratedColumn, TableInheritance } from 'typeorm';

@Entity('clients')
@TableInheritance({ column: 'type', })
export class ClientEntity {
  @PrimaryGeneratedColumn('increment', { type: 'bigint', name: 'id', unsigned: true })
  public id: number;

  @Column((type) => AuditTrailValue, { prefix: false })
  public auditTrail: AuditTrailValue;

  @Column({ name: 'type', type: 'enum', enum: ClientType, default: ClientType.COMPANY })
  readonly type: ClientType;
}