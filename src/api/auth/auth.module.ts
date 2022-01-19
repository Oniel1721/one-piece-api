import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvVariablesEnum } from 'src/types/config.types'
import { ConfigService } from '../../modules/config/config.service'
import { ActionRepository } from '../action/action.repository'
import { ActionService } from '../action/action.service'
import { UserRepository } from '../user/user.repository'
import { UserService } from '../user/user.service'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { LocalStrategy } from './local.strategy'

const _configService = new ConfigService()
const halfMonthInSecond = 1296000

@Module({
  imports: [PassportModule, TypeOrmModule.forFeature([UserRepository, ActionRepository]), JwtModule.register({
    secret: _configService.get(EnvVariablesEnum.JWT_SECRET),
    signOptions: { expiresIn: `${halfMonthInSecond}s` }
  })],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService, ActionService, JwtStrategy, ConfigService]
})
export class AuthModule {}
