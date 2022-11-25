import { Injectable } from '@nestjs/common';

@Injectable()
export class ReminderService {
  getHospital(): string {
    return "Hospital: Santa Rosa"; 
  }
  getDoctor(): string {
    return "Doctor: Oliver Smith"; 
  }
  getMedicalConsultation(): string {
    return "Medical Consultation: Dermatology"; 
  }
  getDate(): string {
    return "Date: 01 december 2022"; 
  }
  getHour(): string {
    return "Hour with the doctor: 18:00 p.m"; 
  }
  getReminderPathway(): string {
    return "Reminder pathway: SMS"; 
  }
}
