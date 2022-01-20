import { Module } from '@nestjs/common'
import { NationalityService } from './nationality.service'
import { NationalityController } from './nationality.controller'

@Module({
  providers: [NationalityService],
  controllers: [NationalityController]
})
export class NationalityModule {}
