import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
export class FindSagaDto {
    @ApiProperty({
      minimum: 1
    })
    @Expose()
    id: number

    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'name of the saga'
    })
    @Expose()
    name: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'plot of the saga'
    })
    @Expose()
    plot: string

    @ApiProperty({
      minimum: 1,
      maximum: 2000,
      description: 'at wich chapter start the saga'
    })
    @Expose()
    from: number

    @ApiProperty({
      minimum: 2,
      maximum: 2000,
      description: 'at wich chapter end the saga'
    })
    @Expose()
    to: number | null

    @ApiProperty({
      minimum: 1,
      maximum: 1000,
      description: 'count of chapters of the saga'
    })
    @Expose()
    length: number

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    createdAt: Date

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    updatedAt: Date
}
