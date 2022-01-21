import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiBearerAuth, ApiResponse } from '@nestjs/swagger'
import { Request, Response } from 'express'
import { BearerAuth } from '../../types/const.bearer.auth'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { CreateUserDto } from './dto/create.user.dto'
import { FindUserDto } from './dto/find.user.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

@ApiBearerAuth(BearerAuth)
@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor (
        private readonly _userService: UserService
  ) {}

  @ApiResponse({
    type: [FindUserDto]
  })
  @Get()
  async findAll () {
    return await this._userService.findAll()
  }

  @ApiResponse({
    type: FindUserDto
  })
  @Get('/me')
  async getProffile (@Req() req: Request) {
    const user = req.user as User
    return await this._userService.findById(user.id)
  }

  @ApiResponse({
    type: FindUserDto
  })
  @Get('/:id')
  async findById (@Param('id', ParseIntPipe) id:number) {
    return await this._userService.findById(id)
  }

  @ApiResponse({
    type: FindUserDto
  })
  @Post()
  async create (@Body() body: CreateUserDto) {
    return await this._userService.create(body)
  }

  @ApiResponse({
    status: 202
  })
  @Delete('/:id')
  async delete (@Param('id', ParseIntPipe) id:number, @Res() res: Response) {
    await this._userService.delete(id)
    return res.sendStatus(202)
  }
}
