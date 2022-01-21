import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateAkumaNoMiTypeDto } from './dto/create.akuma-no-mi-type.dto'
import { FindAkumaNoMiTypeDto } from './dto/find.akuma-no-mi-type.dto'
import { AkumaNoMiType } from './akuma-no-mi-type.entity'
import { AkumaNoMiTypeRepository } from './akuma-no-mi-type.repository'
import { AkumaNoMiTypeService } from './akuma-no-mi-type.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindAkumaNoMiTypeDto
})
@Controller('akuma-no-mi-type')
export class AkumaNoMiTypeController extends CommonController<
    AkumaNoMiType,
    AkumaNoMiTypeRepository,
    AkumaNoMiTypeService,
    FindAkumaNoMiTypeDto,
    CreateAkumaNoMiTypeDto
> {
  constructor (private readonly _akumaNoMiTypeService: AkumaNoMiTypeService) {
    super(_akumaNoMiTypeService, FindAkumaNoMiTypeDto)
  }
}
