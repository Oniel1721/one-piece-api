import { Module } from '@nestjs/common'
import { AkumaNoMiTypeController } from './akuma-no-mi-type.controller'
import { AkumaNoMiTypeService } from './akuma-no-mi-type.service'

@Module({
  controllers: [AkumaNoMiTypeController],
  providers: [AkumaNoMiTypeService]
})
export class AkumaNoMiTypeModule {}
