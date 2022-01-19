import { Module } from '@nestjs/common'
import { ConfigModule } from './modules/config/config.module'
import { ConfigService } from './modules/config/config.service'
import { EnvVariablesEnum } from './types/config.types'
import { DatabaseModule } from './modules/database/database.module'
import { UserModule } from './api/user/user.module'
import { ActionModule } from './api/action/action.module'
import { AuthModule } from './api/auth/auth.module'

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, ActionModule, AuthModule]
})
export class AppModule {
  static port: number;

  constructor (private readonly _configService: ConfigService) {
    AppModule.port = parseInt(this._configService.get(EnvVariablesEnum.PORT))
  }
}
