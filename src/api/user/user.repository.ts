import { StatusEnum } from '../../types/status.enum'
import { EntityRepository, Repository } from 'typeorm'
import { User } from './user.entity'

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findActives (): Promise<User[]> {
    const users = await this.find({ status: StatusEnum.ACTIVE })
    return users
  }
}
