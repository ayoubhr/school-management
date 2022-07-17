import { Document } from 'mongoose'
import { Subject } from './enums'

export interface IPersona extends Document {
  dni: string
  name: string
  surname: string
  postalCode: string
  city: string
  bornDate: string
  teacherSubjects: Subject[]
  course: string
  studentSubjects: IStudentSubjects
  code: string
}

interface IStudentSubjects {
  Math: number
  Chemistry: number
  Physics: number
  Science: number
  Spanish: number
}
