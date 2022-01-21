import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsNotEmptyObject, IsOptional, IsString, IsUrl, Length, Max, Min } from 'class-validator'
import { RelationId } from '../../../types/relation.id'
import { FindVolumeDto } from '../../volume/dto/find.volume.dto'

export class CreateChapterDto {
    @ApiProperty({
      minLength: 2,
      maxLength: 100,
      description: 'title of the chapter'
    })
    @IsString()
    @IsNotEmpty()
    @Length(2, 10)
    title: string

    @ApiProperty({
      minLength: 25,
      maxLength: 1000,
      description: 'title of the chapter'
    })
    @IsString()
    @IsNotEmpty()
    @Length(25, 1000)
    description: string

    @ApiProperty({
      minimum: 0,
      maximum: 2000,
      description: 'number of the chapter'
    })
    @IsInt()
    @Min(0)
    @Max(200)
    number: number

    @ApiProperty({
      minimum: 1,
      description: 'number of the chapter'
    })
    @IsInt()
    @Min(1)
    @Max(200)
    pagesCount: number

    @ApiProperty({
      description: 'link to the chapter'
    })
    @IsUrl()
    @IsNotEmpty()
    chapterUrl: string

    @ApiProperty()
    @IsNotEmptyObject()
    @IsOptional()
    volume: FindVolumeDto | null

    @ApiProperty()
    @IsNotEmptyObject()
    arc: RelationId
}
