import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { RaceController } from './race.controller'
import { RaceRepository } from './race.repository'
import { RaceService } from './race.service'

@Module({
  imports: [TypeOrmModule.forFeature([RaceRepository])],
  controllers: [RaceController],
  providers: [RaceService]
})
export class RaceModule {}
