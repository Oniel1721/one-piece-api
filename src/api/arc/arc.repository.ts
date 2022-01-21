import { EntityRepository, Repository } from 'typeorm'
import { Arc } from './arc.entity'

@EntityRepository(Arc)
export class ArcRepository extends Repository<Arc> {}
