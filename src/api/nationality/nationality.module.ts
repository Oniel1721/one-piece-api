import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { NationalityController } from './nationality.controller'
import { NationalityRepository } from './nationality.repository'
import { NationalityService } from './nationality.service'

@Module({
  imports: [TypeOrmModule.forFeature([NationalityRepository])],
  controllers: [NationalityController],
  providers: [NationalityService]
})
export class NationalityModule {}
