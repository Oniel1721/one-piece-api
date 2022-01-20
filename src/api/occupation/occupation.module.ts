import { Module } from '@nestjs/common'
import { OccupationController } from './occupation.controller'
import { OccupationService } from './occupation.service'

@Module({
  controllers: [OccupationController],
  providers: [OccupationService]
})
export class OccupationModule {}
