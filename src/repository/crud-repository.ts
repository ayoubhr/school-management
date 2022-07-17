import { Student, Teacher } from '../domain/types'

class CRUDRepository {
  create (model: Student | Teacher): void {
    model.save()
      .then(() => {
        console.log('User saved')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  find (): void {}

  findStudent (): void {}

  findTeacher (): void {}
}

export = new CRUDRepository()
