import { EntityRepository, Repository } from 'typeorm'
import { Saga } from './saga.entity'

@EntityRepository(Saga)
export class SagaRepository extends Repository<Saga> {}
