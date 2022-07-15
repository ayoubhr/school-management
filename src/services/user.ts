/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable array-callback-return */
import { Student } from '../domain/types'
import { StudentModel } from './../domain/models/schemas'

class UserService {
  usersMethod (): string {
    return 'users controller worked'
  }

  createStudent (body: Student): string {
    const { dni, name, surname, postalCode, city, bornDate, course, studentSubjects, code } = body
    console.log(dni)
    console.log(studentSubjects)
    console.log(body)
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
    void model.save()

    return 'saved'
  }
}

export = new UserService()
