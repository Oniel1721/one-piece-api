import { Race } from './race.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { RaceRepository } from './race.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class RaceService extends CommonService<Race, RaceRepository> {
  constructor (
    @InjectRepository(RaceRepository)
    private readonly _raceRepository: RaceRepository
  ) {
    super(_raceRepository)
  }
}
