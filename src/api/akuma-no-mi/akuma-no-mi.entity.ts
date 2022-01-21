import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { AkumaNoMiType } from '../akuma-no-mi-type/akuma-no-mi-type.entity'
import { FindAkumaNoMiTypeDto } from '../akuma-no-mi-type/dto/find.akuma-no-mi-type.dto'

@Entity('akuma_no_mis')
export class AkumaNoMi extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    description: string

    @ManyToOne(() => AkumaNoMiType, { eager: true })
    @JoinColumn({ name: 'akuma_no_mi_type_id' })
    type: FindAkumaNoMiTypeDto

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.type = plainToInstance(FindAkumaNoMiTypeDto, this.type)
    }
}
