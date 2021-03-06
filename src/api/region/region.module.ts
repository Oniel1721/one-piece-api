import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RegionController } from './region.controller'
import { RegionRepository } from './region.repository'
import { RegionService } from './region.service'

@Module({
  imports: [TypeOrmModule.forFeature([RegionRepository])],
  controllers: [RegionController],
  providers: [RegionService]
})
export class RegionModule {}
