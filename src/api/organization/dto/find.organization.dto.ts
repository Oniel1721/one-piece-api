import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindCommonDto } from '../../../utils/common.find.dto'
import { FindGroupDto } from '../../group/dto/find.group.dto'
export class FindOrganizationDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the organization'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the organization'
    })
    @Expose()
    description: string

    @ApiProperty()
    @Expose()
    group: FindGroupDto
}
