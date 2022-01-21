import { EntityRepository, Repository } from 'typeorm'
import { Occupation } from './occupation.entity'

@EntityRepository(Occupation)
export class OccupationRepository extends Repository<Occupation> {}
