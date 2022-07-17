/* eslint-disable @typescript-eslint/no-unused-vars */
import mongoose from 'mongoose'
import { Student, Teacher } from '../domain/types'

const studentSchema = new mongoose.Schema({
  dni: { type: String },
  name: { type: String },
  surname: { type: String },
  postalCode: { type: String },
  city: { type: String },
  bornDate: { type: String },
  course: { type: String },
  studentSubjects: { type: {} },
  code: { type: String }
}, { versionKey: false })

export const StudentModel = mongoose.model<Student>('Students', studentSchema)

const teacherSchema = new mongoose.Schema({
  dni: { type: String },
  name: { type: String },
  surname: { type: String },
  postalCode: { type: String },
  city: { type: String },
  bornDate: { type: String },
  teacherSubjects: { type: [String] }
}, { versionKey: false })

export const TeacherModel = mongoose.model<Teacher>('Teachers', teacherSchema)
