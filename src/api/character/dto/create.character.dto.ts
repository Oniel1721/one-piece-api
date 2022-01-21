import { RelationId } from './../../../types/relation.id'
import { CharacterInfo } from './../../../types/character-info.type'
import { ApiProperty } from '@nestjs/swagger'
import { IsArray, IsDateString, IsInt, IsNotEmpty, IsNotEmptyObject, IsOptional, IsPositive, IsString, IsUrl, Length } from 'class-validator'

export class CreateCharacterDto {
    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'first name of the character',
      required: false
    })
    @IsOptional()
    @IsString()
    @Length(1, 100)
    firstName: string | null

    @ApiProperty({
      isArray: true,
      description: 'list of last names of the character',
      required: false
    })
    @IsOptional()
    @IsNotEmpty()
    @IsArray()
    lastNames: string[] | null

    @ApiProperty({
      minLength: 1,
      maxLength: 100,
      description: 'nickname of the character',
      required: false
    })
    @IsOptional()
    @IsString()
    @Length(1, 100)
    nickName: string | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'age of the character',
      required: false
    })
    @IsOptional()
    @IsPositive()
    @IsInt()
    age: string | null

    @ApiProperty({
      minimum: 0,
      description: 'height in m of the character',
      required: false
    })
    @IsOptional()
    @IsPositive()
    height: number | null

    @ApiProperty({
      minLength: 2,
      maxLength: 5,
      description: 'height in cm of the character',
      required: false
    })
    @IsOptional()
    @IsDateString()
    @Length(2, 5)
    birthDate: string | null

    @ApiProperty({
      minLength: 10,
      maxLength: 1000,
      description: 'info about the debut of the character',
      required: false
    })
    @IsOptional()
    @IsString()
    @Length(10, 1000)
    debutInfo: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character section on the one piece wiki',
      required: false
    })
    @IsOptional()
    @IsUrl()
    wikiUrl: string | null

    @ApiProperty({
      maxLength: 100,
      description: 'link of the character\'s avatar image',
      required: false
    })
    @IsOptional()
    @IsUrl()
    avatarUrl: string | null

    @ApiProperty({
      description: 'more info about the character',
      type: [CharacterInfo],
      required: false
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    moreInfo: CharacterInfo[] | null

    @ApiProperty({
      type: [RelationId],
      required: false
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    hakis: RelationId[] | null

    @ApiProperty({
      type: [RelationId],
      required: false
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    akumaNoMis: RelationId[] | null

    @ApiProperty({
      type: [RelationId],
      required: false
    })
    @IsOptional()
    @IsArray()
    @IsNotEmpty()
    races: RelationId[] | null

    @ApiProperty({
      type: RelationId,
      required: false
    })
    @IsOptional()
    @IsNotEmptyObject()
    occupation: RelationId | null

    @ApiProperty({
      type: RelationId,
      required: false
    })
    @IsOptional()
    @IsNotEmptyObject()
    type: RelationId | null

    @ApiProperty({
      type: RelationId,
      required: false
    })
    @IsOptional()
    @IsNotEmptyObject()
    nationality: RelationId | null

    @ApiProperty({
      type: RelationId,
      required: false
    })
    @IsOptional()
    @IsNotEmptyObject()
    debut: RelationId | null
}
