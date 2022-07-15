import { Router } from 'express'
import UserRouter from './user'
import CommentRouter from './comment'
import EvaluationRouter from './evaluation'

class RouteTable {
  private readonly _router = Router()
  private readonly _user = UserRouter
  private readonly _comment = CommentRouter
  private readonly _evaluation = EvaluationRouter

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.use('/user', this._user)
    this._router.use('/comment', this._comment)
    this._router.use('/evaluation', this._evaluation)
  }
}

export = new RouteTable().router
