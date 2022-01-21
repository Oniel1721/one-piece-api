import { plainToInstance } from 'class-transformer'
import { CharacterInfo } from './../../types/character-info.type'
import { AfterLoad, BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { AkumaNoMiType } from '../akuma-no-mi-type/akuma-no-mi-type.entity'
import { FindAkumaNoMiDto } from '../akuma-no-mi/dto/find.akuma-no-mi.dto'
import { Chapter } from '../chapter/chapter.entity'
import { FindChapterDto } from '../chapter/dto/find.chapter.dto'
import { CharacterType } from '../character-type/character-type.entity'
import { FindCharacterTypeDto } from '../character-type/dto/find.character-type.dto'
import { FindHakiDto } from '../haki/dto/find.haki.dto'
import { Haki } from '../haki/haki.entity'
import { FindOccupationDto } from '../occupation/dto/find.occupation.dto'
import { Occupation } from '../occupation/occupation.entity'
import { Race } from '../race/race.entity'
import { FindRaceDto } from '../race/dto/find.race.dto'
import { Nationality } from '../nationality/nationality.entity'
import { FindNationalityDto } from '../nationality/dto/find.nationality.dto'

@Entity('charaters')
export class Character extends BaseEntity {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', name: 'first_name', length: 100, nullable: true })
    firstName: string | null

    @Column({ type: 'varchar', name: 'last_names', array: true, length: 100, nullable: true })
    lastNames: string[] | null

    @Column({ type: 'varchar', name: 'nick_name', length: 100, nullable: true })
    nickName: string | null

    @Column({ type: 'string', length: 5, nullable: true })
    age: string | null

    @Column({ type: 'float', nullable: true })
    height: number | null

    @Column({ type: 'date', name: 'birth_date', length: 5, nullable: true })
    birthDate: Date | null

    @Column({ type: 'varchar', name: 'debut_info', length: 1000, nullable: true })
    debutInfo: string | null

    @Column({ type: 'varchar', name: 'wiki_url', length: 100, nullable: true })
    wikiUrl: string | null

    @Column({ type: 'varchar', name: 'avatar_url', length: 100, nullable: true })
    avatarUrl: string | null

    @Column({ type: 'jsonb', name: 'more_info', array: true, nullable: true })
    moreInfo: CharacterInfo[] | null

    @OneToMany(() => Haki, haki => haki, { eager: true, nullable: true })
    @JoinTable({ name: 'hakis' })
    hakis: FindHakiDto[] | null

    @OneToMany(() => AkumaNoMiType, akumaNoMi => akumaNoMi, { eager: true, nullable: true })
    @JoinTable({ name: 'akuma_no_mis' })
    akumaNoMis: FindAkumaNoMiDto[] | null

    @OneToMany(() => Race, race => race, { eager: true, nullable: true })
    @JoinTable({ name: 'races' })
    races: FindRaceDto[] | null

    @ManyToOne(() => Occupation, { eager: true, nullable: true })
    @JoinColumn({ name: 'occupation_id' })
    occupation: FindOccupationDto | null

    @ManyToOne(() => CharacterType, { eager: true, nullable: true })
    @JoinColumn({ name: 'character_type_id' })
    type: FindCharacterTypeDto | null

    @ManyToOne(() => Nationality, { eager: true, nullable: true })
    @JoinColumn({ name: 'nationality_id' })
    nationality: FindNationalityDto | null

    @ManyToOne(() => Chapter, { eager: true, nullable: true })
    @JoinColumn({ name: 'chapter_id' })
    debut: FindChapterDto | null

    @CreateDateColumn({ type: 'timestamp', name: 'created_at', nullable: false })
    createdAt: Date

    @UpdateDateColumn({ type: 'timestamp', name: 'updated_at', nullable: false })
    updatedAt: Date

    @AfterLoad()
    handleLoad () {
      this.hakis = plainToInstance(FindHakiDto, this.hakis)
      this.akumaNoMis = plainToInstance(FindAkumaNoMiDto, this.akumaNoMis)
      this.races = plainToInstance(FindRaceDto, this.races)
      this.occupation = plainToInstance(FindOccupationDto, this.occupation)
      this.type = plainToInstance(FindCharacterTypeDto, this.type)
      this.nationality = plainToInstance(FindNationalityDto, this.nationality)
      this.debut = plainToInstance(FindChapterDto, this.debut)
    }
}
