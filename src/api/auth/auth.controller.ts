import { Controller, Post, Req, UseGuards } from '@nestjs/common'
// import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { LocalAuthGuard } from './local.guard'

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login (@Req() req:Request) {
    return req.user
  }
}
