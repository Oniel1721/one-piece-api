import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateHakiDto } from './dto/create.haki.dto'
import { FindHakiDto } from './dto/find.haki.dto'
import { Haki } from './haki.entity'
import { HakiRepository } from './haki.repository'
import { HakiService } from './haki.service'

@Controller('haki')
export class HakiController extends CommonController<
    Haki,
    HakiRepository,
    HakiService,
    FindHakiDto,
    CreateHakiDto
> {
  constructor (private readonly _hakiService: HakiService) {
    super(_hakiService, FindHakiDto)
  }
}
