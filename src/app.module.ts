import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';

import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Replace with your DB username
      password: '', // Replace with your DB password
      database: 'db_student', // Your database name
      entities: [Student],
      synchronize: true, // This will auto-create the database schema
    }),
    StudentModule,
  ],
})
export class AppModule {}
