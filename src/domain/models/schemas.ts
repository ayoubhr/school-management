/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { IPersona } from '../interfaces'
import { Student, Teacher } from '../types'

// const student: Student = {}

const studentSchema = new mongoose.Schema({
  dni: { type: String },
  name: { type: String },
  surname: { type: String },
  postalCode: { type: String },
  city: { type: String },
  bornDate: { type: String },
  course: { type: String },
  studentSubjects: { type: [String] },
  code: { type: String }
}, { versionKey: false })

export const StudentModel = mongoose.model<Student>('Students', studentSchema)

/* const teacher: Teacher = {
  dni: '',
  name: '',
  surname: '',
  postalCode: '',
  city: '',
  bornDate: '',
  teacherSubjects: []
}

const teacherSchema = new mongoose.Schema(teacher, { versionKey: false })

export const TeacherModel = mongoose.model('Teachers', teacherSchema) */
