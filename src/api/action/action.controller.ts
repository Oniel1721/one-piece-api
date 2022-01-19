import { Controller, Get, Param, ParseIntPipe, UseGuards } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { ActionService } from './action.service'
import { FindActionDto } from './dto/find.action.dto'

@UseGuards(JwtAuthGuard)
@Controller('action')
export class ActionController {
  constructor (private readonly _actionService: ActionService) {}

  @ApiResponse({
    type: [FindActionDto]
  })
  @Get()
  async findAll () {
    return await this._actionService.findAll()
  }

  @ApiResponse({
    type: FindActionDto
  })
  @Get('/:id')
  async findByUserId (@Param('id', ParseIntPipe) id: number) {
    return await this._actionService.findByUserId(id)
  }
}
