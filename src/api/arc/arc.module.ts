import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ArcController } from './arc.controller'
import { ArcRepository } from './arc.repository'
import { ArcService } from './arc.service'

@Module({
  imports: [TypeOrmModule.forFeature([ArcRepository])],
  controllers: [ArcController],
  providers: [ArcService]
})
export class ArcModule {}
