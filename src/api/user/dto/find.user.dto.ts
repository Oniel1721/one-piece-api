import { Exclude, Expose, Type } from 'class-transformer'

export class FindUserDto {
    @Expose()
    id: number

    @Expose()
    username: string

    @Expose()
    name: string

    @Exclude()
    status

    @Exclude()
    password

    @Expose()
    @Type(() => Date)
    createdAt: Date

    @Expose()
    @Type(() => Date)
    updatedAt: Date
}
