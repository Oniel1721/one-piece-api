import { StatusEnum } from '../../types/status.enum'
import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', unique: true, length: 30, nullable: false })
    username: string

    @Column({ type: 'varchar', nullable: false })
    password: string

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @Column({ type: 'varchar', default: StatusEnum.ACTIVE, nullable: false })
    status: StatusEnum
}
