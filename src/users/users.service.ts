import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUserName(): string {
    return "user name: Martha"; 
  }
  getUserEmail(): string {
    return "user email: Martha@gmail.com"; 
  }
  getUserAdress(): string {
    return "user adress: Pueblo Libre"; 
  }
  getUserPassword(): string {
    return "user password: contrasena"; 
  }
  getUserCellphone(): string {
    return "user phone: 954385932"; 
  }
  getUserCity(): string {
    return "user city: Lima"; 
  }
  getUserProvince(): string {
    return "user province: Lima"; 
  }
}
