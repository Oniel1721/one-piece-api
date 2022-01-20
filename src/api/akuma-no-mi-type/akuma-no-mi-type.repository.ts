import { EntityRepository, Repository } from 'typeorm'
import { AkumaNoMiType } from './akuma-no-mi-type.entity'

@EntityRepository(AkumaNoMiType)
export class AkumaNoMiTypeRepository extends Repository<AkumaNoMiType> {}
