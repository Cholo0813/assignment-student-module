import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async createStudent(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async getStudents(): Promise<Student[]> {
    return this.studentRepository.find();
  }
  
  async getStudentById(id: number): Promise<Student> {
    return this.studentRepository.findOne(id);
  }
  
  async updateStudent(id: number, student: Partial<Student>): Promise<Student> {
    await this.studentRepository.update(id, student);
    return this.studentRepository.findOne(id);
  }
  
}
