import { RelationId } from './../../../types/relation.id'
import { CharacterInfo } from './../../../types/character-info.type'
import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDateString, IsInt, IsNotEmpty, IsNotEmptyObject, IsOptional, IsPositive, IsString, IsUrl, Length } from 'class-validator'

export class CreateCharacterDto {
    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'first name of the character'
    })
    @IsOptional()
    @IsString()
    @Length(1, 100)
    firstName: string | null

    @ApiProperty({
      isArray: true,
      description: 'list of last names of the character'
    })
    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    lastNames: string[] | null

    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'nickname of the character'
    })
    @IsOptional()
    @IsString()
    @Length(1, 100)
    nickName: string | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'age of the character'
    })
    @IsOptional()
    @IsPositive()
    @IsInt()
    age: string | null

    @ApiProperty({
      minimum: 0,
      description: 'height in m of the character'
    })
    @IsOptional()
    @IsPositive()
    height: number | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'height in cm of the character'
    })
    @IsOptional()
    @IsDateString()
    @Length(2, 5)
    birthDate: string | null

    @ApiProperty({
      minLength: 10,
      maxLength: 1000,
      description: 'info about the debut of the character'
    })
    @IsOptional()
    @IsString()
    @Length(10, 1000)
    debutInfo: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character section on the one piece wiki'
    })
    @IsOptional()
    @IsUrl()
    wikiUrl: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character\'s avatar image'
    })
    @IsOptional()
    @IsUrl()
    avatarUrl: string | null

    @ApiProperty({
      description: 'more info about the character',
      type: [CharacterInfo]
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    moreInfo: CharacterInfo[] | null

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    hakis: RelationId[] | null

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    akumaNoMis: RelationId[] | null

    @ApiProperty()
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    races: RelationId[] | null

    @ApiProperty()
    @IsOptional()
    @IsNotEmptyObject()
    occupation: RelationId | null

    @ApiProperty()
    @IsOptional()
    @IsNotEmptyObject()
    type: RelationId | null

    @ApiProperty()
    @IsOptional()
    @IsNotEmptyObject()
    nationality: RelationId | null

    @ApiProperty()
    @IsOptional()
    @IsNotEmptyObject()
    debut: RelationId | null
}
