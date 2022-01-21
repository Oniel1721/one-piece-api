import { EntityRepository, Repository } from 'typeorm'
import { Nationality } from './nationality.entity'

@EntityRepository(Nationality)
export class NationalityRepository extends Repository<Nationality> {}
