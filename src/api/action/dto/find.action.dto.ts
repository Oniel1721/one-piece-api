import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindUserDto } from '../../user/dto/find.user.dto'
import { ActionEnum } from '../action.enum'

export class FindActionDto {
    @ApiProperty({
      minimum: 1
    })
    @Expose()
    id: number

    @ApiProperty()
    @Expose()
    user: FindUserDto

    @ApiProperty({
      enum: ActionEnum
    })
    @Expose()
    actionName: ActionEnum

    @ApiProperty()
    @Expose()
    createdAt: Date
}
