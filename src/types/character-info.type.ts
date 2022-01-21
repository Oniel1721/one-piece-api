import { ApiProperty } from '@nestjs/swagger'

export class CharacterInfo {
    @ApiProperty()
    title: string

    @ApiProperty()
    description: string
}
