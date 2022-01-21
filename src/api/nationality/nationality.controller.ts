import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateNationalityDto } from './dto/create.nationality.dto'
import { FindNationalityDto } from './dto/find.nationality.dto'
import { Nationality } from './nationality.entity'
import { NationalityRepository } from './nationality.repository'
import { NationalityService } from './nationality.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindNationalityDto
})
@Controller('nationality')
export class NationalityController extends CommonController<
    Nationality,
    NationalityRepository,
    NationalityService,
    FindNationalityDto,
    CreateNationalityDto
> {
  constructor (private readonly _nationalityService: NationalityService) {
    super(_nationalityService, FindNationalityDto)
  }
}
