import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindRaceDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the race'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the race'
    })
    @Expose()
    description: string
}
