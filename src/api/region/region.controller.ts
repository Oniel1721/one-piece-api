import { Controller } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { CommonController } from '../../utils/common.controller'
import { CreateRegionDto } from './dto/create.region.dto'
import { FindRegionDto } from './dto/find.region.dto'
import { Region } from './region.entity'
import { RegionRepository } from './region.repository'
import { RegionService } from './region.service'

@ApiResponse({
  type: FindRegionDto
})
@Controller('region')
export class RegionController extends CommonController<
    Region,
    RegionRepository,
    RegionService,
    FindRegionDto,
    CreateRegionDto
> {
  constructor (private readonly _regionService: RegionService) {
    super(_regionService, FindRegionDto)
  }
}
