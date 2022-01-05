import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APPLICATION_PORT);
  logger.log(`Application is running on port: ${process.env.APPLICATION_PORT}`);
}
bootstrap();
