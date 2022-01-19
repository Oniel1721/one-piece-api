import { plainToInstance } from 'class-transformer'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'
import { FindUserDto } from '../user/dto/find.user.dto'
import { User } from '../user/user.entity'
import { ActionEnum } from './action.enum'

@Entity('actions')
export class Action extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @ManyToOne(() => User, { nullable: false, eager: true })
    @JoinColumn({ name: 'user_id' })
    user: FindUserDto

    @Column({ type: 'varchar', length: 30, nullable: false, name: 'action_name' })
    actionName: ActionEnum

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @AfterLoad()
    handleLoad () {
      this.user = plainToInstance(FindUserDto, this.user)
    }
}
