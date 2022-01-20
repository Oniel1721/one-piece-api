import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
import { FindRegionDto } from '../../region/dto/find.region.dto'
export class FindNationalityDto extends FindCommonDto {
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
    region: FindRegionDto
}
