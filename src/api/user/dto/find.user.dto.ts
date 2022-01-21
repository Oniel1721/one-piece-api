import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindUserDto extends FindCommonDto {
    @ApiProperty({
      maxLength: 30,
      minLength: 4
    })
    @Expose()
    username: string

    @ApiHideProperty()
    @Exclude()
    status

    @ApiHideProperty()
    @Exclude()
    password
}
