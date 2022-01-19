import { Module } from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserRepository } from './user.repository'
import { ActionRepository } from '../action/action.repository'
import { ActionService } from '../action/action.service'

@Module({
  imports: [TypeOrmModule.forFeature([UserRepository, ActionRepository])],
  providers: [UserService, ActionService],
  controllers: [UserController]
})
export class UserModule {}
