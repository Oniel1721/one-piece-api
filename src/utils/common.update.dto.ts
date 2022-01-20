import { UpdateResult } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'
import { Exclude, Expose } from 'class-transformer'
export class UpdateCommonDto extends UpdateResult {
    @ApiProperty({
      type: Number,
      required: false,
      description: 'Number of entities edited'
    })
    @Expose()
    affected?: number;

    @Exclude()
    raw: any
}
