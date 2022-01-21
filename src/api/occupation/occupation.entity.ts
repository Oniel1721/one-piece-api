import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { FindOrganizationDto } from '../organization/dto/find.organization.dto'
import { Organization } from '../organization/organization.entity'

@Entity('occupations')
export class Occupation extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', nullable: false, length: 100 })
    name: string

    @Column({ type: 'varchar', nullable: false, length: 1000 })
    description: string

    @ManyToOne(() => Organization, { eager: true })
    @JoinColumn({ name: 'organization_id' })
    organization: FindOrganizationDto

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.organization = plainToInstance(FindOrganizationDto, this.organization)
    }
}
