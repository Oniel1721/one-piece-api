import { ApiHideProperty, ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose, Type } from 'class-transformer'
export class FindUserDto {
    @ApiProperty({
      minimum: 1
    })
    @Expose()
    id: number

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

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    createdAt: Date

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    updatedAt: Date
}
