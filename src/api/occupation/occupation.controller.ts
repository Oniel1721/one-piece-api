import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateOccupationDto } from './dto/create.occupation.dto'
import { FindOccupationDto } from './dto/find.occupation.dto'
import { Occupation } from './occupation.entity'
import { OccupationRepository } from './occupation.repository'
import { OccupationService } from './occupation.service'

@Controller('occupation')
export class OccupationController extends CommonController<
    Occupation,
    OccupationRepository,
    OccupationService,
    FindOccupationDto,
    CreateOccupationDto
> {
  constructor (private readonly _occupationService: OccupationService) {
    super(_occupationService, FindOccupationDto)
  }
}
