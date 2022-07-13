import { Router } from 'express'
import CommentsController from './../controllers/comments'

class CommentsRouter {
  private readonly _router = Router()
  private readonly _controller = CommentsController

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.get('', (req, res, next) => {
      try {
        const result = this._controller.commentsMethod()
        res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })
  }
}

export = new CommentsRouter().router
