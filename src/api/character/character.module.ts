import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { CharacterController } from './character.controller'
import { CharacterRepository } from './character.repository'
import { CharacterService } from './character.service'

@Module({
  imports: [TypeOrmModule.forFeature([CharacterRepository])],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class CharacterModule {}
