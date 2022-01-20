import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateCharacterDto } from './dto/create.character.dto'
import { FindCharacterDto } from './dto/find.character.dto'
import { Character } from './character.entity'
import { CharacterRepository } from './character.repository'
import { CharacterService } from './character.service'

@Controller('character')
export class CharacterController extends CommonController<
    Character,
    CharacterRepository,
    CharacterService,
    FindCharacterDto,
    CreateCharacterDto
> {
  constructor (private readonly _characterService: CharacterService) {
    super(_characterService, FindCharacterDto)
  }
}
