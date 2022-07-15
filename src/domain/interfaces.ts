import { Document } from 'mongoose'

export interface IPersona extends Document {
  dni: string
  name: string
  surname: string
  postalCode: string
  city: string
  bornDate: string
  teacherSubjects: string[]
  course: string
  studentSubjects: string[]
  code: string
}
