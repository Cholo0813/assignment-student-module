import { Controller, Post, Body, Get, Param, Put } from '@nestjs/common';
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

@Put(':id')
async update(@Param('id') id: number, @Body() student: Partial<Student>) {
  return this.studentService.updateStudent(id, student);
}

@Delete(':id')
async remove(@Param('id') id: number) {
  return this.studentService.deleteStudent(id);
}

}
