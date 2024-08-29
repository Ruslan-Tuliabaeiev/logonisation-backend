import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function bootstrap() {
  const PORT = 5000 ;
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors({
    origin:  ['http://localhost:8080', 'http://localhost:3000'],
    credentials: true

  })
  const swaggerConfig = new DocumentBuilder()
      .setTitle('api')
      .setDescription(
          'OpenAPI documentation for the Dialog API and the Analytics API',
      )
      .addBasicAuth()
      .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('api',app, document)
  await app.listen(PORT, () => console.log(`Server started in PORT = ${PORT}`));

}
bootstrap();
