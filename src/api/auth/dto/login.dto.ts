import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
    @ApiProperty()
    message: string

    @ApiProperty()
    success: boolean

    @ApiProperty()
    token: string | null
}
