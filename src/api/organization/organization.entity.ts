import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { FindGroupDto } from '../group/dto/find.group.dto'
import { Group } from '../group/group.entity'

@Entity('organizations')
export class Organization extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    description: string

    @ManyToOne(() => Group, { eager: true })
    @JoinColumn({ name: 'group_id' })
    group: FindGroupDto

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.group = plainToInstance(FindGroupDto, this.group)
    }
}
