import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindRegionDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the region'
    })
    @Expose()
    name: string
}
