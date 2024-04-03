import { MigrationInterface, QueryRunner } from 'typeorm';
import * as faker from 'faker';

export class UserTable1709581098769 implements MigrationInterface {
  name = 'UserTable1709581098769';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "USER" ("user_id" SERIAL NOT NULL, "user_name" character varying(200) NOT NULL, "user_email" character varying(200) NOT NULL, "user_status" bit NOT NULL, CONSTRAINT "PK_7e95c49ceadc1951ae0ea829b24" PRIMARY KEY ("user_id"))`,
    );

    for (let i = 0; i < 8; i++) {
      const userName = faker.name.firstName();
      const userEmail = faker.internet.email();
      await queryRunner.query(`
          INSERT INTO "USER" ("user_name", "user_email", "user_status")
          VALUES ('${userName}', '${userEmail}',  B'1')
        `);
    }

    for (let i = 0; i < 4; i++) {
      const userName = faker.name.firstName();
      const userEmail = faker.internet.email();
      await queryRunner.query(`
          INSERT INTO "USER" ("user_name", "user_email", "user_status")
          VALUES ('${userName}', '${userEmail}',  B'0')
        `);
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "USER" DROP CONSTRAINT "FK_6c1ff6abd2f04a563f93362d69e"`);
    await queryRunner.query(`DROP TABLE "USER"`);
  }
}
