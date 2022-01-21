import { AkumaNoMiType } from './akuma-no-mi-type.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { AkumaNoMiTypeRepository } from './akuma-no-mi-type.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class AkumaNoMiTypeService extends CommonService<AkumaNoMiType, AkumaNoMiTypeRepository> {
  constructor (
    @InjectRepository(AkumaNoMiTypeRepository)
    private readonly _akumaNoMiTypeRepository: AkumaNoMiTypeRepository
  ) {
    super(_akumaNoMiTypeRepository)
  }
}
