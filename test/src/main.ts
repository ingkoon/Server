import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // dependency for class validations
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = new DocumentBuilder()
    .setTitle('C.I.C')
    .setDescription('cat')
    .setVersion('1.0.0')
    .build();
  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  //swagger API의 엔드포인트 지정
  SwaggerModule.setup('docs', app, document);
  const PORT = process.env.PORT;
  app.enableCors({
    origin: true,
    credentials: true,
  });
  await app.listen(8000);
}
bootstrap();
