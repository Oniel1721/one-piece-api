import { Region } from './region.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { RegionRepository } from './region.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class RegionService extends CommonService<Region, RegionRepository> {
  constructor (
    @InjectRepository(RegionRepository)
    private readonly _regionRepository: RegionRepository
  ) {
    super(_regionRepository)
  }
}
