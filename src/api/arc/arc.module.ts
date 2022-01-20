import { Module } from '@nestjs/common'
import { ArcService } from './arc.service'
import { ArcController } from './arc.controller'

@Module({
  providers: [ArcService],
  controllers: [ArcController]
})
export class ArcModule {}
