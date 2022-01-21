import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateGroupDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the group'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the group'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    description: string
}
