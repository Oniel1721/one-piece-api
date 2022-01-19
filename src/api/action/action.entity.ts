import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { ActionEnum } from './action.enum'

@Entity('actions')
export class Action extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'int', nullable: false, name: 'action_id' })
    userId: number

    @Column({ type: 'enum', enum: ActionEnum, nullable: false, name: 'action_name' })
    actionName: string

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date
}
