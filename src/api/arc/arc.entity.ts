import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { FindSagaDto } from '../saga/dto/find.saga.dto'
import { Saga } from '../saga/saga.entity'

@Entity('arcs')
export class Arc extends BaseEntity {
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

    @ManyToOne(() => Saga, { eager: true })
    @JoinColumn({ name: 'saga_id' })
    saga: FindSagaDto

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.saga = plainToInstance(FindSagaDto, this.saga)
    }
}
