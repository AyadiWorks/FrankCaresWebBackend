"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const port = process.env.PORT || 4000;
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const corsOptions = {
        origin: ['https://frank-cares.web.app', 'http://localhost:3000'],
        optionsSuccessStatus: 200,
    };
    app.enableCors(corsOptions);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Frank Cares API')
        .setDescription('The frank cares API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port);
    console.log(`Server running on port ${port}`);
}
bootstrap();
//# sourceMappingURL=main.js.map