import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  app.enableCors({
    origin: 'http://localhost:4200', // อนุญาตให้รับร้องขอจากโดเมนนี้เท่านั้น
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Origin,Accept,Content-Type,Authorization',
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();
