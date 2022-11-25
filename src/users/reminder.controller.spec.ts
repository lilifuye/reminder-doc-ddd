import { Test, TestingModule } from '@nestjs/testing';
import { ReminderController } from './reminder.controller';
import { ReminderService } from './reminder.service';

describe('ReminderController', () => {
  let reminderController: ReminderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReminderController],
      providers: [ReminderService],
    }).compile();

    reminderController = module.get<ReminderController>(ReminderController);
  });

  describe('root', () => {
    it('should return "Hospital: Santa Rosa"', () => {
      expect(reminderController.getHospital()).toBe('Hospital: Santa Rosa');
    });
    it('should return "Doctor: Oliver Smith"', () => {
      expect(reminderController. getDoctor()).toBe('Doctor: Oliver Smith');
    });
    it('should return "Medical Consultation: Dermatology"', () => {
      expect(reminderController.getMedicalConsultation()).toBe('Medical Consultation: Dermatology');
    });
    it('should return "Date: 01 december 2022"', () => {
      expect(reminderController.getDate()).toBe('Date: 01 december 2022');
    });
    it('should return "Hour with the doctor: 18:00 p.m"', () => {
      expect(reminderController.getHour()).toBe('Hour with the doctor: 18:00 p.m');
    });
    it('should return "Reminder pathway: SMS"', () => {
      expect(reminderController.getReminderPathway()).toBe('Reminder pathway: SMS');
    });
  });
});
