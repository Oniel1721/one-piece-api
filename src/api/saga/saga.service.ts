import { Saga } from './saga.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { SagaRepository } from './saga.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class SagaService extends CommonService<Saga, SagaRepository> {
  constructor (
    @InjectRepository(SagaRepository)
    private readonly _sagaRepository: SagaRepository) {
    super(_sagaRepository)
  }
}
