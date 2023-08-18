import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOption: CorsOptions = {
    origin: 'https://pblhbkayandex.nomoreparties.co',
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    allowedHeaders: ['Content-type', 'Authorization'],
  };
  app.enableCors(corsOption);
  
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(process.env.SERVER_PORT || 3000);
}
bootstrap();
