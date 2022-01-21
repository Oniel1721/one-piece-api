import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateCharacterTypeDto } from './dto/create.character-type.dto'
import { FindCharacterTypeDto } from './dto/find.character-type.dto'
import { CharacterType } from './character-type.entity'
import { CharacterTypeRepository } from './character-type.repository'
import { CharacterTypeService } from './character-type.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindCharacterTypeDto
})
@Controller('character-type')
export class CharacterTypeController extends CommonController<
    CharacterType,
    CharacterTypeRepository,
    CharacterTypeService,
    FindCharacterTypeDto,
    CreateCharacterTypeDto
> {
  constructor (private readonly _characterTypeService: CharacterTypeService) {
    super(_characterTypeService, FindCharacterTypeDto)
  }
}
