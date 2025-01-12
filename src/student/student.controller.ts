import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() student: Student) {
    return this.studentService.createStudent(student);
  }

  @Get()
async findAll() {
  return this.studentService.getStudents();
}

@Get(':id')
async findOne(@Param('id') id: number) {
  return this.studentService.getStudentById(id);
}

}
