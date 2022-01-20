import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { FindRegionDto } from '../region/dto/find.region.dto'
import { Region } from '../region/region.entity'

@Entity('nationalities')
export class Nationality extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @ManyToOne(() => Region, { eager: true })
    @JoinColumn({ name: 'region_id' })
    region: FindRegionDto

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.region = plainToInstance(FindRegionDto, this.region)
    }
}
