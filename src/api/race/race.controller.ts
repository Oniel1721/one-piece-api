import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateRaceDto } from './dto/create.race.dto'
import { FindRaceDto } from './dto/find.race.dto'
import { Race } from './race.entity'
import { RaceRepository } from './race.repository'
import { RaceService } from './race.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindRaceDto
})
@Controller('race')
export class RaceController extends CommonController<
    Race,
    RaceRepository,
    RaceService,
    FindRaceDto,
    CreateRaceDto
> {
  constructor (private readonly _raceService: RaceService) {
    super(_raceService, FindRaceDto)
  }
}
