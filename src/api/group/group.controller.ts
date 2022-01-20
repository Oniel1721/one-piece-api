import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateGroupDto } from './dto/create.group.dto'
import { FindGroupDto } from './dto/find.group.dto'
import { Group } from './group.entity'
import { GroupRepository } from './group.repository'
import { GroupService } from './group.service'
import { ApiResponse } from '@nestjs/swagger'
@ApiResponse({
  type: FindGroupDto
})
@Controller('group')
export class GroupController extends CommonController<
    Group,
    GroupRepository,
    GroupService,
    FindGroupDto,
    CreateGroupDto
> {
  constructor (private readonly _groupService: GroupService) {
    super(_groupService, FindGroupDto)
  }
}
