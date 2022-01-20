import { Occupation } from './occupation.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { OccupationRepository } from './occupation.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class OccupationService extends CommonService<Occupation, OccupationRepository> {
  constructor (
    @InjectRepository(OccupationRepository)
    private readonly _occupationRepository: OccupationRepository
  ) {
    super(_occupationRepository)
  }
}
