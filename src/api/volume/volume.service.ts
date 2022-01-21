import { Volume } from './volume.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { VolumeRepository } from './volume.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class VolumeService extends CommonService<Volume, VolumeRepository> {
  constructor (
    @InjectRepository(VolumeRepository)
    private readonly _volumeRepository: VolumeRepository
  ) {
    super(_volumeRepository)
  }
}
