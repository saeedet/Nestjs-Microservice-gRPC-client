import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const logger = new Logger('Main');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000, () => {
    logger.log('Listening on port: 3000');
  });
}
bootstrap();
