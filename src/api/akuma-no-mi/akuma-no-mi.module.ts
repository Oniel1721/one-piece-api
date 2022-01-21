import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AkumaNoMiController } from './akuma-no-mi.controller'
import { AkumaNoMiRepository } from './akuma-no-mi.repository'
import { AkumaNoMiService } from './akuma-no-mi.service'

@Module({
  imports: [TypeOrmModule.forFeature([AkumaNoMiRepository])],
  controllers: [AkumaNoMiController],
  providers: [AkumaNoMiService]
})
export class AkumaNoMiModule {}
