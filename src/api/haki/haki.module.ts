import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { HakiController } from './haki.controller'
import { HakiRepository } from './haki.repository'
import { HakiService } from './haki.service'

@Module({
  imports: [TypeOrmModule.forFeature([HakiRepository])],
  controllers: [HakiController],
  providers: [HakiService]
})
export class HakiModule {}
