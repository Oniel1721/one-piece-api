import { EntityRepository, Repository } from 'typeorm'
import { AkumaNoMi } from './akuma-no-mi.entity'

@EntityRepository(AkumaNoMi)
export class AkumaNoMiRepository extends Repository<AkumaNoMi> {}
