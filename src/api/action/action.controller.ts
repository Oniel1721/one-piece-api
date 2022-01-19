import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { ActionService } from './action.service'

@UseGuards(JwtAuthGuard)
@Controller('action')
export class ActionController {
  constructor (private readonly _actionService: ActionService) {}

  @Get()
  async findAll () {
    return await this._actionService.findAll()
  }

  @Get('/:id')
  async findByUserId (@Param('id', ParseIntPipe) id: number) {
    return await this._actionService.findByUserId(id)
  }
}
