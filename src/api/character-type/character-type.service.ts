import { CharacterType } from './character-type.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { CharacterTypeRepository } from './character-type.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CharacterTypeService extends CommonService<CharacterType, CharacterTypeRepository> {
  constructor (
    @InjectRepository(CharacterTypeRepository)
    private readonly _characterTypeRepository: CharacterTypeRepository
  ) {
    super(_characterTypeRepository)
  }
}
