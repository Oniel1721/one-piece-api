import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindSagaDto } from '../../saga/dto/find.saga.dto'
import { FindCommonDto } from '../../../utils/common.find.dto'

export class FindArcDto extends FindCommonDto {
  @ApiProperty({
    minLength: 2,
    maxLength: 100,
    description: 'name of the arc'
  })
  @Expose()
  name: string

  @ApiProperty({
    minLength: 25,
    maxLength: 1000,
    description: 'plot of the arc'
  })
  @Expose()
  plot: string

  @ApiProperty({
    minimum: 1,
    maximum: 2000,
    description: 'at wich chapter start the arc'
  })
  @Expose()
  from: number

  @ApiProperty({
    minimum: 2,
    maximum: 2000,
    description: 'at wich chapter end the arc',
    required: false
  })
  @Expose()
  to: number | null

  @ApiProperty({
    minimum: 1,
    maximum: 1000,
    description: 'count of chapters of the arc'
  })
  @Expose()
  length: number

  @ApiProperty()
  @Expose()
  saga: FindSagaDto
}
