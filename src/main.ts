import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { existsSync, writeFileSync } from 'fs'

async function bootstrap () {
  const globalPrefix = 'api'

  const app = await NestFactory.create(AppModule)
  app.enableCors()
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalPipes(new ValidationPipe())
  const swaggerConfig = new DocumentBuilder()
    .setTitle('ONE PIECE API')
    .setVersion('1.0')
    .build()
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig)
  const schemaRoute = './src/utils/const.schemas.ts'
  if (!existsSync(schemaRoute)) {
    writeFileSync(schemaRoute, 'export const schemas = ' + JSON.stringify(swaggerDocument.components.schemas))
  }
  SwaggerModule.setup('docs', app, swaggerDocument)
  await app.listen(AppModule.port)
}
bootstrap()
