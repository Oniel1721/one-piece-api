import { Controller } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { CommonController } from '../../utils/common.controller'
import { CreateSagaDto } from './dto/create.saga.dto'
import { FindSagaDto } from './dto/find.saga.dto'
import { Saga } from './saga.entity'
import { SagaRepository } from './saga.repository'
import { SagaService } from './saga.service'

@ApiResponse({
  type: FindSagaDto
})
@Controller('saga')
export class SagaController extends CommonController<
    Saga,
    SagaRepository,
    SagaService,
    FindSagaDto,
    CreateSagaDto
> {
  constructor (private readonly _sagaService: SagaService) {
    super(_sagaService, FindSagaDto)
  }
}
