import { Controller, Get } from '@nestjs/common'
import { paths } from '../../utils/const.paths'

@Controller()
export class AppController {
  @Get('/paths')
  findPaths () {
    return paths
  }
}
