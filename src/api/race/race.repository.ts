import { EntityRepository, Repository } from 'typeorm'
import { Race } from './race.entity'

@EntityRepository(Race)
export class RaceRepository extends Repository<Race> {}
