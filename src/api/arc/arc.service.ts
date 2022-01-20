import { Arc } from './arc.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { ArcRepository } from './arc.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class ArcService extends CommonService<Arc, ArcRepository> {
  constructor (
    @InjectRepository(ArcRepository)
    private readonly _arcRepository: ArcRepository
  ) {
    super(_arcRepository)
  }
}
