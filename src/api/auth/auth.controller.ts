import { Controller, Post, Req, UseGuards } from '@nestjs/common'
import { ApiResponse } from '@nestjs/swagger'
// import { AuthGuard } from '@nestjs/passport'
import { Request } from 'express'
import { LoginDto } from './dto/login.dto'
import { JwtAuthGuard } from './jwt.guard'
import { LocalAuthGuard } from './local.guard'

@Controller('auth')
export class AuthController {
  @ApiResponse({
    type: LoginDto
  })
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login (@Req() req:Request) {
    return req.user
  }

  @UseGuards(JwtAuthGuard)
  @Post('/validate')
  async validate (@Req() req:Request) {
    return req.user
  }
}
