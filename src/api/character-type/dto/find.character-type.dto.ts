import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindCharacterTypeDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the character-type'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the character-type'
    })
    @Expose()
    description: string
}
