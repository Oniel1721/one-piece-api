import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SagaController } from './saga.controller'
import { SagaRepository } from './saga.repository'
import { SagaService } from './saga.service'

@Module({
  imports: [TypeOrmModule.forFeature([SagaRepository])],
  controllers: [SagaController],
  providers: [SagaService]
})
export class SagaModule {}
