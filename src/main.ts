import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

async function bootstrap () {
  const globalPrefix = 'api'

  const app = await NestFactory.create(AppModule)
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(AppModule.port)
}
bootstrap()
