import { Module } from '@nestjs/common'
import { ConfigModule } from './modules/config/config.module'
import { ConfigService } from './modules/config/config.service'
import { EnvVariablesEnum } from './types/config.types'

@Module({
  imports: [ConfigModule]
})
export class AppModule {
  static port: number;

  constructor (private readonly _configService: ConfigService) {
    AppModule.port = parseInt(this._configService.get(EnvVariablesEnum.PORT))
  }
}
