import { IPersona } from './interfaces'

// Model types
export type Student = Omit<IPersona, 'teacherSubjects'>

export type Teacher = Omit<IPersona, 'course' | 'studentSubjetcs' | 'code'>

// Return types

export type userCreated = Pick<IPersona, 'code'>
