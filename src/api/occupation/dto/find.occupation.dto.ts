import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
import { FindOrganizationDto } from '../../organization/dto/find.organization.dto'
export class FindOccupationDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the occupation'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the occupation'
    })
    @Expose()
    description: string

    @ApiProperty()
    @Expose()
    organization: FindOrganizationDto
}
