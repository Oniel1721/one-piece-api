import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { ActionRepository } from './action.repository'
import { Action } from './action.entity'
import { ActionEnum } from './action.enum'
import { User } from '../user/user.entity'

@Injectable()
export class ActionService {
  constructor (
        @InjectRepository(ActionRepository)
        private readonly _actionRepository: ActionRepository
  ) {}

  async findAll ():Promise<Action[]> {
    const actions = await this._actionRepository.find()
    return actions
  }

  async findByUserId (id: number):Promise<Action[]> {
    const action = await this._actionRepository.find({ user: { id } })
    return action
  }

  async create ({ id }: User, actionName: ActionEnum) {
    const action = await this._actionRepository.save({ user: { id }, actionName })
    return action
  }
}
