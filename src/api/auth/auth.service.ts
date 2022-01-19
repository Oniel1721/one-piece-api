import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common'
import { CreateUserDto } from '../user/dto/create.user.dto'
import { UserService } from '../user/user.service'
import { compareSync } from 'bcrypt'
import { LoginDto } from './dto/login.dto'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor (
    private readonly _userService: UserService,
    private readonly _jwtService: JwtService
  ) {}

  async login ({ username, password }: CreateUserDto):Promise<LoginDto> {
    const user = await this._userService.findOne({ username })
    if (!user) {
      throw new NotFoundException({
        message: 'There are\'nt users with the given username',
        success: false,
        token: null
      })
    }
    if (!compareSync(password, user.password)) {
      throw new BadRequestException({
        message: 'password wrong',
        success: false,
        token: null
      })
    }

    const payload = { username: user.username, sub: user.id }
    const token = this._jwtService.sign(payload)
    return {
      message: 'success!!',
      success: true,
      token
    }
  }
}
