import { Router } from 'express'
import UsersRouter from './users'
import CommentsRouter from './comments'
import EvaluationsRouter from './evaluations'

class RouteTable {
  private readonly _router = Router()
  private readonly _users = UsersRouter
  private readonly _comments = CommentsRouter
  private readonly _evaluations = EvaluationsRouter

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.use('/users', this._users)
    this._router.use('/comments', this._comments)
    this._router.use('/evaluations', this._evaluations)
  }
}

export = new RouteTable().router
