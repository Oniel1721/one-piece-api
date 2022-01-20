import { BaseEntity, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('occupations')
export class Occupation extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date
}