// import { calcMegaByte } from './../../utils/byte'
import { plainToInstance } from 'class-transformer'
// import { Image } from '../../types/image.type'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Arc } from '../arc/arc.entity'
import { FindArcDto } from '../arc/dto/find.arc.dto'
import { Volume } from '../volume/volume.entity'
import { FindVolumeDto } from '../volume/dto/find.volume.dto'

@Entity('chapters')
export class Chapter extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 100, nullable: false })
    title: string

    @Column({ type: 'varchar', length: 1000, nullable: false })
    description: string

    @Column({ type: 'int', nullable: false, unique: true })
    number: number

    @Column({ type: 'int', nullable: false, name: 'pages_count' })
    pagesCount: number

    @Column({ type: 'varchar', nullable: false, name: 'chapter_url' })
    chapterUrl: string

    @Column({ type: 'timestamp', name: 'released_at', nullable: false })
    releasedAt: Date

    @ManyToOne(() => Volume, { eager: true, nullable: true })
    @JoinColumn({ name: 'volume_id' })
    volume: FindVolumeDto | null

    @ManyToOne(() => Arc, { eager: true, nullable: true })
    @JoinColumn({ name: 'arc_id' })
    arc: FindArcDto | null

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.arc = plainToInstance(FindArcDto, this.arc)
      this.volume = plainToInstance(FindVolumeDto, this.volume)
    }
}
