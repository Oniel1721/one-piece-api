import { Haki } from './haki.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { HakiRepository } from './haki.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class HakiService extends CommonService<Haki, HakiRepository> {
  constructor (
    @InjectRepository(HakiRepository)
    private readonly _hakiRepository: HakiRepository
  ) {
    super(_hakiRepository)
  }
}
