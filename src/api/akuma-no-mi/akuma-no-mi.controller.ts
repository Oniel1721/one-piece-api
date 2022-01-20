import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateAkumaNoMiDto } from './dto/create.akuma-no-mi.dto'
import { FindAkumaNoMiDto } from './dto/find.akuma-no-mi.dto'
import { AkumaNoMi } from './akuma-no-mi.entity'
import { AkumaNoMiRepository } from './akuma-no-mi.repository'
import { AkumaNoMiService } from './akuma-no-mi.service'

@Controller('akumaNoMi')
export class AkumaNoMiController extends CommonController<
    AkumaNoMi,
    AkumaNoMiRepository,
    AkumaNoMiService,
    FindAkumaNoMiDto,
    CreateAkumaNoMiDto
> {
  constructor (private readonly _akumaNoMiService: AkumaNoMiService) {
    super(_akumaNoMiService, FindAkumaNoMiDto)
  }
}
