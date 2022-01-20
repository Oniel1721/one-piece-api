import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateArcDto } from './dto/create.arc.dto'
import { FindArcDto } from './dto/find.arc.dto'
import { Arc } from './arc.entity'
import { ArcRepository } from './arc.repository'
import { ArcService } from './arc.service'

@Controller('arc')
export class ArcController extends CommonController<
    Arc,
    ArcRepository,
    ArcService,
    FindArcDto,
    CreateArcDto
> {
  constructor (private readonly _arcService: ArcService) {
    super(_arcService, FindArcDto)
  }
}
