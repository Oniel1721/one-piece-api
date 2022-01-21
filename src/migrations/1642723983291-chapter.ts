import {MigrationInterface, QueryRunner} from "typeorm";

export class chapter1642723983291 implements MigrationInterface {
    name = 'chapter1642723983291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying(30) NOT NULL, "password" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "status" character varying NOT NULL DEFAULT 'ACTIVE', CONSTRAINT "UQ_fe0bb3f6520ee0469504521e710" UNIQUE ("username"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "actions" ("id" SERIAL NOT NULL, "action_name" character varying(30) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "user_id" integer NOT NULL, CONSTRAINT "PK_7bfb822f56be449c0b8adbf83cf" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "akuma_no_mi_types" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9498f92f84647640eee4d1228e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "akuma_no_mis" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "akuma_no_mi_type_id" integer, CONSTRAINT "PK_ae589d8ed05034f529bea4371b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "sagas" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "plot" character varying(1000) NOT NULL, "from" integer NOT NULL, "to" integer, "length" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_c950945566b99142462ba2b1608" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "arcs" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "plot" character varying(1000) NOT NULL, "from" integer NOT NULL, "to" integer, "length" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "saga_id" integer, CONSTRAINT "PK_c7fc395d3468d5341595ef26b2e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "volumes" ("id" SERIAL NOT NULL, "number" integer NOT NULL, "sbs" jsonb NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_b22ca6c6891171312a8b3c593ec" UNIQUE ("number"), CONSTRAINT "PK_f3d03a6ad79006b028d3eae9e9f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "chapters" ("id" SERIAL NOT NULL, "title" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "number" integer NOT NULL, "pages_count" integer NOT NULL, "chapter_url" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "volume_id" integer, "arc_id" integer, CONSTRAINT "UQ_c015f8f19ba5f9a6df99757de70" UNIQUE ("number"), CONSTRAINT "PK_a2bbdbb4bdc786fe0cb0fcfc4a0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "character_types" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_410cea6b9771864daadbf90c9dc" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "charaters" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a474dd039ac3afbcd88d2a148df" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "groups" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_659d1483316afb28afd3a90646e" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hakis" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_fb9c497cdf4f3a20d487b9154f3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "regions" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4fcd12ed6a046276e2deb08801c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "nationalities" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "region_id" integer, CONSTRAINT "PK_aaa94322d4f245f4fa3c3d591fd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "organizations" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "group_id" integer, CONSTRAINT "PK_6b031fcd0863e3f6b44230163f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "occupations" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "organization_id" integer, CONSTRAINT "PK_0bf09083dd897df1e8ebb96b5c1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "races" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "description" character varying(1000) NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ba7d19b382156bc33244426c597" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "actions" ADD CONSTRAINT "FK_314aaf9c37b61b0a1267c1f4b59" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "akuma_no_mis" ADD CONSTRAINT "FK_ac89d2ef7a6cbe9b3aa85162974" FOREIGN KEY ("akuma_no_mi_type_id") REFERENCES "akuma_no_mi_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "arcs" ADD CONSTRAINT "FK_d2d8f11c6f9b27bdbb1fb6d346e" FOREIGN KEY ("saga_id") REFERENCES "sagas"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapters" ADD CONSTRAINT "FK_8a52975c5d2d3f2f14d655a4a1a" FOREIGN KEY ("volume_id") REFERENCES "volumes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "chapters" ADD CONSTRAINT "FK_05e73ae8672c441944bc2295b52" FOREIGN KEY ("arc_id") REFERENCES "arcs"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "nationalities" ADD CONSTRAINT "FK_d93253e5e064895a19cb0d5d8a2" FOREIGN KEY ("region_id") REFERENCES "regions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "organizations" ADD CONSTRAINT "FK_d9dcef518c5b456a51edc995106" FOREIGN KEY ("group_id") REFERENCES "groups"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "occupations" ADD CONSTRAINT "FK_121c10252e9f4dfc441cec18e54" FOREIGN KEY ("organization_id") REFERENCES "organizations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "occupations" DROP CONSTRAINT "FK_121c10252e9f4dfc441cec18e54"`);
        await queryRunner.query(`ALTER TABLE "organizations" DROP CONSTRAINT "FK_d9dcef518c5b456a51edc995106"`);
        await queryRunner.query(`ALTER TABLE "nationalities" DROP CONSTRAINT "FK_d93253e5e064895a19cb0d5d8a2"`);
        await queryRunner.query(`ALTER TABLE "chapters" DROP CONSTRAINT "FK_05e73ae8672c441944bc2295b52"`);
        await queryRunner.query(`ALTER TABLE "chapters" DROP CONSTRAINT "FK_8a52975c5d2d3f2f14d655a4a1a"`);
        await queryRunner.query(`ALTER TABLE "arcs" DROP CONSTRAINT "FK_d2d8f11c6f9b27bdbb1fb6d346e"`);
        await queryRunner.query(`ALTER TABLE "akuma_no_mis" DROP CONSTRAINT "FK_ac89d2ef7a6cbe9b3aa85162974"`);
        await queryRunner.query(`ALTER TABLE "actions" DROP CONSTRAINT "FK_314aaf9c37b61b0a1267c1f4b59"`);
        await queryRunner.query(`DROP TABLE "races"`);
        await queryRunner.query(`DROP TABLE "occupations"`);
        await queryRunner.query(`DROP TABLE "organizations"`);
        await queryRunner.query(`DROP TABLE "nationalities"`);
        await queryRunner.query(`DROP TABLE "regions"`);
        await queryRunner.query(`DROP TABLE "hakis"`);
        await queryRunner.query(`DROP TABLE "groups"`);
        await queryRunner.query(`DROP TABLE "charaters"`);
        await queryRunner.query(`DROP TABLE "character_types"`);
        await queryRunner.query(`DROP TABLE "chapters"`);
        await queryRunner.query(`DROP TABLE "volumes"`);
        await queryRunner.query(`DROP TABLE "arcs"`);
        await queryRunner.query(`DROP TABLE "sagas"`);
        await queryRunner.query(`DROP TABLE "akuma_no_mis"`);
        await queryRunner.query(`DROP TABLE "akuma_no_mi_types"`);
        await queryRunner.query(`DROP TABLE "actions"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
