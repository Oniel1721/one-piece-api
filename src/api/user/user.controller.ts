import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common'
import { CreateUserDto } from './dto/create.user.dto'
import { UserService } from './user.service'

@Controller('user')
export class UserController {
  constructor (
        private readonly _userService: UserService
  ) {}

  @Get()
  async findAll () {
    return await this._userService.findAll()
  }

  @Get('/:id')
  async findById (@Param('id', ParseIntPipe) id:number) {
    return await this._userService.findById(id)
  }

  @Post()
  async create (@Body() body: CreateUserDto) {
    return await this._userService.create(body)
  }

  @Delete('/:id')
  async delete (@Param('id', ParseIntPipe) id:number) {
    await this._userService.delete(id)
    return 202
  }
}
