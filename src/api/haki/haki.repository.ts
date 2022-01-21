import { Haki } from './haki.entity'
import { EntityRepository, Repository } from 'typeorm'

@EntityRepository(Haki)
export class HakiRepository extends Repository<Haki> {}
