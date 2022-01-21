import { SBS } from './../../../types/sbs.type'
import { ApiProperty } from '@nestjs/swagger'
import { Expose } from 'class-transformer'
import { FindCommonDto } from '../../../utils/common.find.dto'
export class FindVolumeDto extends FindCommonDto {
    @ApiProperty({
      minimum: 1,
      description: 'number of the volume'
    })
    @Expose()
    number: number

    @ApiProperty({
      description: 'sbs of the volume',
      type: SBS,
      isArray: true,
      required: false
    })
    @Expose()
    sbs: SBS[] | null
}
