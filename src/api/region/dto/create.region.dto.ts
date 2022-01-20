import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateRegionDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the group'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string
}
