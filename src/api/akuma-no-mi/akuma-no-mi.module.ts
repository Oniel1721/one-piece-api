import { Module } from '@nestjs/common'
import { AkumaNoMiController } from './akuma-no-mi.controller'
import { AkumaNoMiService } from './akuma-no-mi.service'

@Module({
  controllers: [AkumaNoMiController],
  providers: [AkumaNoMiService]
})
export class AkumaNoMiModule {}
