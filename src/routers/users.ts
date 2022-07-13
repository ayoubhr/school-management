import { Router } from 'express'
import UsersController from './../controllers/users'

class UsersRouter {
  private readonly _router = Router()
  private readonly _controller = UsersController

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.get('', (req, res, next) => {
      res.status(200).json(this._controller.usersMethod())
    })
  }
}

export = new UsersRouter().router
