import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindGroupDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the group'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the group'
    })
    @Expose()
    description: string
}
