import { ApiProperty } from '@nestjs/swagger'
import { Expose, Type } from 'class-transformer'
export class FindSagaDto {
    @ApiProperty({
      minimum: 1
    })
    @Expose()
    id: number

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    createdAt: Date

    @ApiProperty()
    @Expose()
    @Type(() => Date)
    updatedAt: Date
}
