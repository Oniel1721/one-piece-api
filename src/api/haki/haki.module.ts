import { Module } from '@nestjs/common'
import { HakiController } from './haki.controller'
import { HakiService } from './haki.service'

@Module({
  controllers: [HakiController],
  providers: [HakiService]
})
export class HakiModule {}
