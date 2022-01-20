import { EntityRepository, Repository } from 'typeorm'
import { CharacterType } from './character-type.entity'

@EntityRepository(CharacterType)
export class CharacterTypeRepository extends Repository<CharacterType> {}
