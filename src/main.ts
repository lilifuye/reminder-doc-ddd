import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersModule } from './users/users.module';


async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const config = new DocumentBuilder()
  .setTitle('Reminder Doc API - Med&Line')
  .setDescription('Reminder Doc API description of Med&Line')
  .setVersion('1.0')
  .addTag('user clients')
  .addTag('reminder')
  .build();
  const document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,document);
  await app.listen(3000);
}
bootstrap();
