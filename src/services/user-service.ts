/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable array-callback-return */
import { Student } from '../domain/types'
import { StudentModel } from '../models/models'
import crudRepository from '../repository/crud-repository'

class UserService {
  usersMethod (): string {
    return 'users controller worked'
  }

  createStudent (body: Student): void {
    const { dni, name, surname, postalCode, city, bornDate, course, studentSubjects, code } = body
    const model = new StudentModel({
      dni: dni,
      name: name,
      surname: surname,
      postalCode: postalCode,
      city: city,
      bornDate: bornDate,
      course: course,
      studentSubjects: studentSubjects,
      code: code
    })

    crudRepository.create(model)
  }
}

export = new UserService()
