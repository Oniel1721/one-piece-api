import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { VolumeController } from './volume.controller'
import { VolumeRepository } from './volume.repository'
import { VolumeService } from './volume.service'

@Module({
  imports: [TypeOrmModule.forFeature([VolumeRepository])],
  controllers: [VolumeController],
  providers: [VolumeService]
})
export class VolumeModule {}
