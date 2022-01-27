import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDatabase1622304168366 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createDatabase('nestjs-app-react-car-app', true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropDatabase('nestjs-app-react-car-app', true);
  }
}
