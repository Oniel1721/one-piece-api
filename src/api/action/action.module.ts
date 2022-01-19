import { Module } from '@nestjs/common'
import { ActionService } from './action.service'
import { ActionController } from './action.controller'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ActionRepository } from './action.repository'

@Module({
  imports: [TypeOrmModule.forFeature([ActionRepository])],
  providers: [ActionService],
  controllers: [ActionController]
})
export class ActionModule {}
