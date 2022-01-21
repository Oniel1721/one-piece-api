import { Character } from './character.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { CharacterRepository } from './character.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class CharacterService extends CommonService<Character, CharacterRepository> {
  constructor (
    @InjectRepository(CharacterRepository)
    private readonly _characterRepository: CharacterRepository) {
    super(_characterRepository)
  }
}
