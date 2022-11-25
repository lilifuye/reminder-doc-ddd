import { ClientId } from 'src/users/domain/aggregates/client/client-id.value';
import { DateTime } from './date-time.value';

export class AuditTrail {
  private readonly createdAt: DateTime;
  private readonly createdBy: ClientId;
  private readonly updatedAt: DateTime;
  private readonly updatedBy: ClientId;

  private constructor(createdAt: DateTime, createdBy: ClientId, updatedAt: DateTime, updatedBy: ClientId) {
    this.createdAt = createdAt;
    this.createdBy = createdBy;
    this.updatedAt = updatedAt;
    this.updatedBy = updatedBy;
  }

  public static from(createdAt: DateTime, createdBy: ClientId, updatedAt: DateTime, updatedBy: ClientId) {
    return new AuditTrail(createdAt, createdBy, updatedAt, updatedBy);
  }

  public getCreatedAt(): DateTime {
    return this.createdAt;
  }

  public getCreatedBy(): ClientId {
    return this.createdBy;
  }

  public getUpdatedAt(): DateTime {
    return this.updatedAt;
  }

  public getUpdatedBy(): ClientId {
    return this.updatedBy;
  }
}