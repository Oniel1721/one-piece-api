import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('regions')
export class Region extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date
}
