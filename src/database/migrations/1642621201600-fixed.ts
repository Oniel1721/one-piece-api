import {MigrationInterface, QueryRunner} from "typeorm";

export class fixed1642621201600 implements MigrationInterface {
    name = 'fixed1642621201600'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actions" DROP COLUMN "action_name"`);
        await queryRunner.query(`ALTER TABLE "actions" ADD "action_name" character varying(30) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "actions" DROP COLUMN "action_name"`);
        await queryRunner.query(`ALTER TABLE "actions" ADD "action_name" actions_action_name_enum NOT NULL`);
    }

}
