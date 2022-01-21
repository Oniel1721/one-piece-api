import { ApiProperty } from '@nestjs/swagger'
import { Image } from './image.type'

export class SBS {
    @ApiProperty()
    reader: string

    @ApiProperty()
    oda: string

    @ApiProperty({
      required: false
    })
    imgUrl: Image | null
}
