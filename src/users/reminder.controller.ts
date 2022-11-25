import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ReminderService } from './reminder.service';

@Controller('reminder')
@ApiTags('reminder')
export class ReminderController {
  constructor(private readonly remindersService: ReminderService) {}

  @Get()
  getHospital(): string {
    return this.remindersService.getHospital();
  }
  getDoctor(): string{
    return this.remindersService.getDoctor();
  }
  getMedicalConsultation(): string{
    return this.remindersService.getMedicalConsultation();
  }
  getDate(): string{
    return this.remindersService.getDate();
  }
  getHour(): string{
    return this.remindersService.getHour();
  }
  getReminderPathway(): string{
    return this.remindersService.getReminderPathway();
  }
}
