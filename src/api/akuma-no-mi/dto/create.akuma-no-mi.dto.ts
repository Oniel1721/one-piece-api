import { RelationId } from './../../../types/relation.id'
import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsNotEmptyObject, IsString, Length } from 'class-validator'

export class CreateAkumaNoMiDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the akuma no mi'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'description of the akuma no mi'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    description: string

    @ApiProperty()
    @IsNotEmptyObject()
    type:RelationId
}
