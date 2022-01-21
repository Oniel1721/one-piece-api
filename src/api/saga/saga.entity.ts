import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('sagas')
export class Saga extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    plot: string

    @Column({ type: 'int', nullable: false })
    from: number

    @Column({ type: 'int', nullable: true })
    to: number | null

    @Column({ type: 'int', nullable: false })
    length: number

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date
}
