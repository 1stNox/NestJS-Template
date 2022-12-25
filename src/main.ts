import { NestFactory } from "@nestjs/core";
import { FastifyAdapter } from "@nestjs/platform-fastify";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new FastifyAdapter());

  const config = new DocumentBuilder()
    .setTitle("YOUR_PROJECT_NAME")
    .setDescription("An api to geocode data")
    .setVersion("1.0.0")
    .addTag("health")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api", app, document);

  await app.listen(3000, "0.0.0.0");
}

bootstrap();
