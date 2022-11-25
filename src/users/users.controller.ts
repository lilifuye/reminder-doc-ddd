import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';

@Controller('user clients')
@ApiTags('user clients')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUserName(): string {
    return this.usersService.getUserName();
  }
  getUserEmail(): string{
    return this.usersService.getUserEmail();
  }
  getUserAdress(): string{
    return this.usersService.getUserAdress();
  }
  getUserPassword(): string{
    return this.usersService.getUserPassword();
  }
  getUserCellphone(): string{
    return this.usersService.getUserCellphone();
  }
  getUserCity(): string{
    return this.usersService.getUserCity();
  }
  getUserProvince(): string{
    return this.usersService.getUserProvince();
  }
}
