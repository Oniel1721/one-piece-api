import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
import { FindAkumaNoMiTypeDto } from '../../akuma-no-mi-type/dto/find.akuma-no-mi-type.dto'
export class FindAkumaNoMiDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the akuma no mi'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the akuma no mi'
    })
    @Expose()
    description: string

    @ApiProperty()
    @Expose()
    type: FindAkumaNoMiTypeDto
}
