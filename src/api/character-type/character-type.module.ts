import { Module } from '@nestjs/common'
import { CharacterTypeController } from './character-type.controller'
import { CharacterTypeService } from './character-type.service'

@Module({
  controllers: [CharacterTypeController],
  providers: [CharacterTypeService]
})
export class CharacterTypeModule {}
