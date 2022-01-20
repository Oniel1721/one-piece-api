import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AkumaNoMiTypeController } from './akuma-no-mi-type.controller'
import { AkumaNoMiTypeRepository } from './akuma-no-mi-type.repository'
import { AkumaNoMiTypeService } from './akuma-no-mi-type.service'

@Module({
  imports: [TypeOrmModule.forFeature([AkumaNoMiTypeRepository])],
  controllers: [AkumaNoMiTypeController],
  providers: [AkumaNoMiTypeService]
})
export class AkumaNoMiTypeModule {}
