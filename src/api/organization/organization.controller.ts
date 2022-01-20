import { Controller } from '@nestjs/common'
import { CommonController } from '../../utils/common.controller'
import { CreateOrganizationDto } from './dto/create.organization.dto'
import { FindOrganizationDto } from './dto/find.organization.dto'
import { Organization } from './organization.entity'
import { OrganizationRepository } from './organization.repository'
import { OrganizationService } from './organization.service'

@Controller('organization')
export class OrganizationController extends CommonController<
    Organization,
    OrganizationRepository,
    OrganizationService,
    FindOrganizationDto,
    CreateOrganizationDto
> {
  constructor (private readonly _organizationService: OrganizationService) {
    super(_organizationService, FindOrganizationDto)
  }
}
