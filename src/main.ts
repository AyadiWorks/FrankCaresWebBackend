import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const port = process.env.PORT || 4000;
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: ['https://frank-cares.web.app', 'http://localhost:3000'],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  };
  app.enableCors(corsOptions);

  const config = new DocumentBuilder()
    .setTitle('Frank Cares API')
    .setDescription('The frank cares API description')
    .setVersion('1.0')
    // .addTag('frankcares')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
  console.log(`Server running on port ${port}`);
}
bootstrap();
