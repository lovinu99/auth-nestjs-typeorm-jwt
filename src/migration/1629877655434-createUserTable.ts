// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class createUserTable1629877655434 implements MigrationInterface {

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.createTable(new Table({
//             name: "user",
//             columns: [
//                 {
//                     name: "id",
//                     type: "int",
//                     isPrimary: true,
//                     isGenerated: true,
//                     generationStrategy: 'increment'
//                 },
//                 {
//                     name: "username",
//                     type: "nvarchar(50)",
//                 },
//                 {
//                     name: "password",
//                     type: "nvarchar(255)",
//                 },
//                 {
//                     name: "name",
//                     type: "nvarchar(100)",
//                 },
//                 {
//                     name: "email",
//                     type: "nvarchar(100)",
//                 }
//             ]
//         }), true);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("user");
//     }

// }
