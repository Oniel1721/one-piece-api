import { Module } from '@nestjs/common'
import { ConfigModule } from './modules/config/config.module'
import { ConfigService } from './modules/config/config.service'
import { EnvVariablesEnum } from './types/config.types'
import { DatabaseModule } from './modules/database/database.module'
import { UserModule } from './api/user/user.module'
import { ActionModule } from './api/action/action.module'
import { AuthModule } from './api/auth/auth.module'
import { ChapterModule } from './api/chapter/chapter.module';
import { CharacterController } from './api/character/character.controller';
import { CharacterService } from './api/character/character.service';
import { CharacterModule } from './api/character/character.module';
import { NationalityModule } from './api/nationality/nationality.module';
import { RegionModule } from './api/region/region.module';
import { RaceModule } from './api/race/race.module';
import { ArcModule } from './api/arc/arc.module';
import { SagaModule } from './api/saga/saga.module';
import { AkumaNoMiModule } from './api/akuma-no-mi/akuma-no-mi.module';
import { AkumaNoMiTypeModule } from './api/akuma-no-mi-type/akuma-no-mi-type.module';
import { HakiModule } from './api/haki/haki.module';
import { CharacterTypeModule } from './api/character-type/character-type.module';
import { OccupationModule } from './api/occupation/occupation.module';
import { OrganizationModule } from './api/organization/organization.module';
import { GroupModule } from './api/group/group.module';

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, ActionModule, AuthModule, ChapterModule, CharacterModule, NationalityModule, RegionModule, RaceModule, ArcModule, SagaModule, AkumaNoMiModule, AkumaNoMiTypeModule, HakiModule, CharacterTypeModule, OccupationModule, OrganizationModule, GroupModule],
  controllers: [CharacterController],
  providers: [CharacterService]
})
export class AppModule {
  static port: number;

  constructor (private readonly _configService: ConfigService) {
    AppModule.port = parseInt(this._configService.get(EnvVariablesEnum.PORT))
  }
}
