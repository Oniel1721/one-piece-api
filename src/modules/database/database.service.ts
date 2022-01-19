import { TypeOrmModule } from '@nestjs/typeorm'
import { EnvVariablesEnum } from 'src/types/config.types'
import { ConnectionOptions } from 'typeorm'
import { ConfigModule } from '../config/config.module'
import { ConfigService } from '../config/config.service'
import { join } from 'path'

export const databaseProviders = [
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    async useFactory (config: ConfigService) {
      return {
        ssl: false,
        type: 'postgres' as const,
        host: config.get(EnvVariablesEnum.DB_HOST),
        username: config.get(EnvVariablesEnum.DB_USER),
        password: config.get(EnvVariablesEnum.DB_PASS),
        entities: [join(__dirname, '/../../**/*.entity{.ts,.js}')],
        migrations: [join(__dirname, '/migrations/*{.ts,.js}')]
      } as ConnectionOptions
    }
  })
]
