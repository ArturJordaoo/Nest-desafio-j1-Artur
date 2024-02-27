import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Log the PORT value
  console.log('Port:', process.env.PORT);
  
  await app.listen(process.env.PORT || 3000);
}

bootstrap();