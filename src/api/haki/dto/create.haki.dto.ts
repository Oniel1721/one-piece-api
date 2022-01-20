import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateHakiDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the haki'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the haki'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    description: string
}
