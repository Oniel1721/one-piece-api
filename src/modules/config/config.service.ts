import { Injectable } from '@nestjs/common'
import { EnvConfigType, EnvVariablesEnum } from '../../types/config.types'
import { join } from 'path'
import { existsSync, readFileSync } from 'fs'
import { parse } from 'dotenv'

@Injectable()
export class ConfigService {
    private readonly envConfig: EnvConfigType

    constructor () {
      const isDevelopmentEnv = process.env.NODE_ENV !== 'production'
      if (isDevelopmentEnv) {
        const envFilePath = join(__dirname, '../../.env')
        const existsPath = existsSync(envFilePath)
        if (!existsPath) {
          throw new Error('.env file does not exist')
        }
        const envFileText = readFileSync(envFilePath)
        this.envConfig = parse(envFileText)
      } else {
        this.envConfig = {
          PORT: process.env.PORT,
          DB_NAME: process.env.DB_NAME,
          DB_PORT: process.env.DB_PORT,
          DB_PASS: process.env.DB_PASS,
          DB_HOST: process.env.DB_HOST,
          DB_USER: process.env.DB_USER
        }
      }
    }

    get (key: EnvVariablesEnum):string {
      return this.envConfig[key]
    }
}
