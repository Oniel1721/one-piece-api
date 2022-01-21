import { AkumaNoMi } from './akuma-no-mi.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { AkumaNoMiRepository } from './akuma-no-mi.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AkumaNoMiService extends CommonService<AkumaNoMi, AkumaNoMiRepository> {
  constructor (
    @InjectRepository(AkumaNoMiRepository)
    private readonly _akumaNoMiRepository: AkumaNoMiRepository
  ) {
    super(_akumaNoMiRepository)
  }
}
