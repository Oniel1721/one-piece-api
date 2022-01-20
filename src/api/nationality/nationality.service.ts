import { Nationality } from './nationality.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { NationalityRepository } from './nationality.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class NationalityService extends CommonService<Nationality, NationalityRepository> {
  constructor (
    @InjectRepository(NationalityRepository)
    private readonly _nationalityRepository: NationalityRepository
  ) {
    super(_nationalityRepository)
  }
}
