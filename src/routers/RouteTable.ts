import { Router } from 'express'
import UsersRouter from './users'

class RouteTable {
  private readonly _router = Router()
  private readonly _users = UsersRouter

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.use('/users', this._users)
  }
}

export = new RouteTable().router
