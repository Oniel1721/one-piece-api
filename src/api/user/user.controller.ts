import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Req, Res, UseGuards } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
import { Request, Response } from 'express'
import { JwtAuthGuard } from '../auth/jwt.guard'
import { CreateUserDto } from './dto/create.user.dto'
import { FindUserDto } from './dto/find.user.dto'
import { User } from './user.entity'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor (
        private readonly _userService: UserService
  ) {}

  @ApiResponse({
    type: [FindUserDto]
  })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll () {
    return await this._userService.findAll()
  }

  @ApiResponse({
    type: FindUserDto
  })
  @UseGuards(JwtAuthGuard)
  @Get('/me')
  async getProffile (@Req() req: Request) {
    const user = req.user as User
    return await this._userService.findById(user.id)
  }

  @ApiResponse({
    type: FindUserDto
  })
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  async findById (@Param('id', ParseIntPipe) id:number) {
    return await this._userService.findById(id)
  }

  @ApiResponse({
    type: FindUserDto
  })
  @Post()
  async create (@Body() body: CreateUserDto, @Res() res: Response) {
    res.status(201)
    return await this._userService.create(body)
  }

  @ApiResponse({
    status: 202
  })
  @UseGuards(JwtAuthGuard)
  @Delete('/:id')
  async delete (@Param('id', ParseIntPipe) id:number, @Res() res: Response) {
    await this._userService.delete(id)
    return res.sendStatus(202)
  }
}
