import { FindChapterDto } from './../../chapter/dto/find.chapter.dto'
import { FindNationalityDto } from './../../nationality/dto/find.nationality.dto'
import { FindCharacterTypeDto } from './../../character-type/dto/find.character-type.dto'
import { FindOccupationDto } from './../../occupation/dto/find.occupation.dto'
import { FindRaceDto } from './../../race/dto/find.race.dto'
import { FindHakiDto } from './../../haki/dto/find.haki.dto'
import { CharacterInfo } from './../../../types/character-info.type'
import { Expose } from 'class-transformer'
import { ApiProperty } from '@nestjs/swagger'
import { FindCommonDto } from '../../../utils/common.find.dto'
import { FindAkumaNoMiDto } from '../../akuma-no-mi/dto/find.akuma-no-mi.dto'
export class FindCharacterDto extends FindCommonDto {
    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'first name of the character'
    })
    @Expose()
    firstName: string | null

    @ApiProperty({
      isArray: true,
      description: 'list of last names of the character'
    })
    @Expose()
    lastNames: string[] | null

    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'nickname of the character'
    })
    @Expose()
    nickName: string | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'age of the character'
    })
    @Expose()
    age: string | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'height in cm of the character'
    })
    @Expose()
    height: number | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'height in cm of the character'
    })
    @Expose()
    birthDate: string | null

    @ApiProperty({
      minLength: 10,
      maxLength: 1000,
      description: 'info about the debut of the character'
    })
    @Expose()
    debutInfo: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character section on the one piece wiki'
    })
    @Expose()
    wikiUrl: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character\'s avatar image'
    })
    @Expose()
    avatarUrl: string | null

    @ApiProperty({
      description: 'more info about the character',
      type: [CharacterInfo]
    })
    @Expose()
    moreInfo: CharacterInfo[] | null

    @ApiProperty({
      type: [FindHakiDto]
    })
    @Expose()
    hakis: FindHakiDto[] | null

    @ApiProperty({
      type: [FindAkumaNoMiDto]
    })
    @Expose()
    akumaNoMis: FindAkumaNoMiDto[] | null

    @ApiProperty({
      type: [FindRaceDto]
    })
    @Expose()
    races: FindRaceDto[] | null

    @ApiProperty({
      type: FindOccupationDto
    })
    @Expose()
    occupation: FindOccupationDto | null

    @ApiProperty({
      type: FindCharacterTypeDto
    })
    @Expose()
    type: FindCharacterTypeDto | null

    @ApiProperty({
      type: FindNationalityDto
    })
    @Expose()
    nationality: FindNationalityDto | null

    @ApiProperty({
      type: FindChapterDto
    })
    @Expose()
    debut: FindChapterDto | null
}
