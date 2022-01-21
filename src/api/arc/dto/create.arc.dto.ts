import { RelationId } from './../../../types/relation.id'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, Length, Max, Min } from 'class-validator'

export class CreateArcDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the arc'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'plot of the arc'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    plot: string

    @ApiProperty({
      minimum: 1,
      maximum: 2000,
      description: 'at wich chapter start the arc'
    })
    @IsInt()
    @Min(1)
    from: number

    @ApiProperty({
      minimum: 2,
      maximum: 2000,
      description: 'at wich chapter end the arc',
      required: false
    })
    @IsOptional()
    @IsInt()
    @Min(2)
    @Max(2000)
    to?: number | null

    @ApiProperty()
    @IsNotEmptyObject()
    saga:RelationId

    @ApiProperty({
      minimum: 2,
      maximum: 2000,
      description: 'count of chapters of the arc'
    })
    @IsInt()
    @Min(2)
    @Max(2000)
    length: number
}
