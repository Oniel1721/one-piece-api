import { IsNotEmpty, IsString, Length } from 'class-validator'

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @Length(4, 30)
    username: string

    @IsString()
    @IsNotEmpty()
    @Length(8, 30)
    password: string
}
