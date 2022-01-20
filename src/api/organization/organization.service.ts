import { Organization } from './organization.entity'
import { Injectable } from '@nestjs/common'
import { CommonService } from '../../utils/common.service'
import { OrganizationRepository } from './organization.repository'
import { InjectRepository } from '@nestjs/typeorm'

@Injectable()
export class OrganizationService extends CommonService<Organization, OrganizationRepository> {
  constructor (
    @InjectRepository(OrganizationRepository)
    private readonly _organizationRepository: OrganizationRepository
  ) {
    super(_organizationRepository)
  }
}
