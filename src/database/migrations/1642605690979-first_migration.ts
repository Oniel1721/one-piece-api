import { MigrationInterface, QueryRunner } from 'typeorm'

export class firstMigration1642605690979 implements MigrationInterface {
    name = 'firstMigration1642605690979'

    public async up (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('CREATE TYPE "public"."actions_action_name_enum" AS ENUM()')
      await queryRunner.query('CREATE TABLE "actions" ("id" SERIAL NOT NULL, "action_id" integer NOT NULL, "action_name" "public"."actions_action_name_enum" NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_7bfb822f56be449c0b8adbf83cf" PRIMARY KEY ("id"))')
      await queryRunner.query('CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(30) NOT NULL, "name" character varying(50) NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))')
    }

    public async down (queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query('DROP TABLE "users"')
      await queryRunner.query('DROP TABLE "actions"')
      await queryRunner.query('DROP TYPE "public"."actions_action_name_enum"')
    }
}
