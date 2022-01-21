import { EntityRepository, Repository } from 'typeorm'
import { Volume } from './volume.entity'

@EntityRepository(Volume)
export class VolumeRepository extends Repository<Volume> {}
