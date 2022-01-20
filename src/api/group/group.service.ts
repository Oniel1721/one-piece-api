import { Group } from './group.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { GroupRepository } from './group.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class GroupService extends CommonService<Group, GroupRepository> {
  constructor (
    @InjectRepository(GroupRepository)
    private readonly _groupRepository: GroupRepository
  ) {
    super(_groupRepository)
  }
}
