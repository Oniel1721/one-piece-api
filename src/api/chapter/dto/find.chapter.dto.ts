import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindArcDto } from '../../arc/dto/find.arc.dto'
import { FindVolumeDto } from '../../volume/dto/find.volume.dto'
import { FindCommonDto } from '../../../utils/common.find.dto'

@Expose()
export class FindChapterDto extends FindCommonDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'title of the chapter'
    })
    title: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'title of the chapter'
    })
    description: string

    @ApiProperty({
      minimum: 0,
      description: 'number of the chapter'
    })
    number: number

    @ApiProperty({
      description: 'number of the chapter'
    })
    pagesCount: number

    @ApiProperty({
      description: 'link to the chapter'
    })
    chapterUrl: string

    @ApiProperty({
      type: FindVolumeDto
    })
    volume: FindVolumeDto | null

    @ApiProperty({
      type: FindArcDto
    })
    arc: FindArcDto | null
}
