// import { MigrationInterface, QueryRunner, Table } from "typeorm";

// export class createusertable1630033655548 implements MigrationInterface {
//     name = 'createusertable1630033655548'

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
//                 },
//                 {
//                     name: "role",
//                     type: "nvarchar(20)",
//                 }
//                 // ,
//                 // {
//                 //     name: 'created_at',
//                 //     type: 'datetime2',
//                 //     isNullable: false,
//                 // }
//             ]
//         }), true);
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.dropTable("user");
//     }

// }
