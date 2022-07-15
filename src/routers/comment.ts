import { Router } from 'express'
import CommentService from '../services/comment'

class CommentsRouter {
  private readonly _router = Router()
  private readonly _service = CommentService

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.get('', (req, res, next) => {
      try {
        const result = this._service.commentsMethod()
        res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })
  }
}

export = new CommentsRouter().router
