import { FindUserDto } from './dto/find.user.dto'
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'
import { plainToInstance } from 'class-transformer'
import { CreateUserDto } from './dto/create.user.dto'
import { StatusEnum } from '../../types/status.enum'
import { FindOneOptions, UpdateResult } from 'typeorm'
import { User } from './user.entity'
import { ActionService } from '../action/action.service'
import { ActionEnum } from '../action/action.enum'

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(UserRepository)
    private readonly _userRepository: UserRepository,
    private readonly _actionService: ActionService
  ) {}

  async findAll ():Promise<FindUserDto[]> {
    const users = await this._userRepository.findActives()
    const planed = plainToInstance(FindUserDto, users)
    return planed
  }

  async findOne (body: FindOneOptions<User>):Promise<FindUserDto> {
    const user = await this._userRepository.findOne(body)
    const planed = plainToInstance(FindUserDto, user)
    return planed
  }

  async findById (id:number):Promise<FindUserDto> {
    if (typeof id !== 'number') {
      throw new BadRequestException()
    }
    const user = await this._userRepository.findOne(id)
    const planed = plainToInstance(FindUserDto, user)
    return planed
  }

  async create (body: CreateUserDto):Promise<FindUserDto> {
    const user = await this._userRepository.save({ ...body, status: StatusEnum.ACTIVE })
    await this._actionService.create(user, ActionEnum.USER_CREATED)
    const planed = plainToInstance(FindUserDto, user)
    return planed
  }

  async delete (id:number):Promise<UpdateResult> {
    if (typeof id !== 'number') {
      throw new BadRequestException()
    }

    const updated = await this._userRepository.update(id, {
      status: StatusEnum.INACTIVE
    })

    if (!updated.affected) {
      throw new NotFoundException()
    }
    return updated
  }
}
