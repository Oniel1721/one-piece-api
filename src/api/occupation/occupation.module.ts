import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { OccupationController } from './occupation.controller'
import { OccupationRepository } from './occupation.repository'
import { OccupationService } from './occupation.service'

@Module({
  imports: [TypeOrmModule.forFeature([OccupationRepository])],
  controllers: [OccupationController],
  providers: [OccupationService]
})
export class OccupationModule {}
