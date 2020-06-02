import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config} from 'dotenv';
config();
const port: number = Number(process.env.PORT);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen( port || 3650);
}
bootstrap();
