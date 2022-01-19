import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, UseGuards } from '@nestjs/common'
import { Request } from 'express'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { CreateUserDto } from './dto/create.user.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor (
        private readonly _userService: UserService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll () {
    return await this._userService.findAll()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getProffile (@Req() req: Request) {
    const user = req.user as User
    return await this._userService.findById(user.id)
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById (@Param('id', ParseIntPipe) id:number) {
    return await this._userService.findById(id)
  }

  @Post()
  async create (@Body() body: CreateUserDto) {
    return await this._userService.create(body)
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete (@Param('id', ParseIntPipe) id:number) {
    await this._userService.delete(id)
    return 202
  }
}
