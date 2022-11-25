import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  describe('root', () => {
    it('should return "user name: Martha"', () => {
      expect(controller.getUserName()).toBe('user name: Martha');
    });
    it('should return "user email: Martha@gmail.com"', () => {
      expect(controller. getUserEmail()).toBe('user email: Martha@gmail.com');
    });
    it('should return "user adress: Pueblo Libre"', () => {
      expect(controller.getUserAdress()).toBe('user adress: Pueblo Libre');
    });
    it('should return "user password: contrasena"', () => {
      expect(controller.getUserPassword()).toBe('user password: contrasena');
    });
    it('should return "user phone: 954385932"', () => {
      expect(controller.getUserCellphone()).toBe('user phone: 954385932');
    });
    it('should return "user city: Lima"', () => {
      expect(controller.getUserCity()).toBe('user city: Lima');
    });
    it('should return "user province: Lima"', () => {
      expect(controller.getUserProvince()).toBe('user province: Lima');
    });
  });
});
