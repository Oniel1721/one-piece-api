import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'
import { ConfigService } from '../../modules/config/config.service'
import { EnvVariablesEnum } from '../../types/config.types'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor (
        private readonly _configService: ConfigService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: _configService.get(EnvVariablesEnum.JWT_SECRET)
    })
  }

  async validate (payload: any) {
    return { id: payload.sub, username: payload.username }
  }
}
