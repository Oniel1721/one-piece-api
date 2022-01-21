import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateVolumeDto } from './dto/create.volume.dto'
import { FindVolumeDto } from './dto/find.volume.dto'
import { Volume } from './volume.entity'
import { VolumeRepository } from './volume.repository'
import { VolumeService } from './volume.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindVolumeDto
})
@Controller('volume')
export class VolumeController extends CommonController<
    Volume,
    VolumeRepository,
    VolumeService,
    FindVolumeDto,
    CreateVolumeDto
> {
  constructor (private readonly _volumeService: VolumeService) {
    super(_volumeService, FindVolumeDto)
  }
}
