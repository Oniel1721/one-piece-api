import { SBS } from '../../../types/sbs.type'
import { ApiProperty } from '@nestjs/swagger'
import { IsInt, IsNotEmpty, IsOptional, IsPositive } from 'class-validator'

export class CreateVolumeDto {
  @ApiProperty({
    minimum: 1,
    description: 'number of the volume'
  })
  @IsPositive()
  @IsInt()
  number: number

  @ApiProperty({
    description: 'sbs of the volume',
    type: SBS
  })
  @IsOptional()
  @IsNotEmpty()
  sbs: SBS[] | null
}
