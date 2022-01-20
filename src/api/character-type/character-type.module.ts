import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CharacterTypeController } from './character-type.controller'
import { CharacterTypeRepository } from './character-type.repository'
import { CharacterTypeService } from './character-type.service'

@Module({
  imports: [TypeOrmModule.forFeature([CharacterTypeRepository])],
  controllers: [CharacterTypeController],
  providers: [CharacterTypeService]
})
export class CharacterTypeModule {}
