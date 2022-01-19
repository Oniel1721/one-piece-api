import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({
      maxLength: 30,
      minLength: 4,
      example: 'example123'
    })
    @IsString()
    @IsNotEmpty()
    @Length(4, 30)
    username: string

    @ApiProperty({
      maxLength: 30,
      minLength: 8,
      example: 'SuperSecure#Password000'
    })
    @IsString()
    @IsNotEmpty()
    @Length(8, 30)
    password: string
}
