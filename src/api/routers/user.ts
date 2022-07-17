/* eslint-disable no-trailing-spaces */

import { Router } from 'express'
import UserService from '../../services/user-service'

class UsersRouter {
  private readonly _router = Router()
  private readonly _service = UserService

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.get('', (req, res, next) => {
      try {
        const result = this._service.usersMethod()
        res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })

    this._router.post('/createStudent', (req, res, next) => {
      let result
      try {
        // console.log(req.body)
        result = this._service.createStudent(req.body)
        res.status(200).json({ message: result })
      } catch (error) {
        next(error)
      }
    })
  }
}

export = new UsersRouter().router
