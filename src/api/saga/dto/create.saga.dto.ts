import { ApiProperty } from '@nestjs/swagger'
import { Allow, IsInt, IsNotEmpty, IsString, Length, Max, Min } from 'class-validator'

export class CreateSagaDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the saga'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 100)
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'plot of the saga'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    plot: string

    @ApiProperty({
      minimum: 1,
      maximum: 2000,
      description: 'at wich chapter start the saga'
    })
    @IsInt()
    @Min(1)
    from: number

    @ApiProperty({
      minimum: 2,
      maximum: 2000,
      description: 'at wich chapter end the saga',
      required: false
    })
    @Min(2)
    @Max(2000)
    @Allow()
    to: number | null

    @ApiProperty({
      minimum: 2,
      maximum: 2000,
      description: 'count of chapters of the saga',
      required: false
    })
    @IsInt()
    @Min(2)
    @Max(2000)
    @Allow()
    length: number
}
