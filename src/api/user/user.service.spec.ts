import { Test, TestingModule } from '@nestjs/testing'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ActionRepository } from '../action/action.repository'
import { ActionService } from '../action/action.service'
import { UserRepository } from './user.repository'
import { UserService } from './user.service'

describe('UserService', () => {
  let service: UserService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [TypeOrmModule.forFeature([UserRepository, ActionRepository])],
      providers: [UserService, ActionService]
    }).compile()

    service = module.get<UserService>(UserService)
    console.log(service)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
