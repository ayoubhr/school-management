import { Router } from 'express'
import EvaluationService from '../services/evaluation'

class EvaluationsRouter {
  private readonly _router = Router()
  private readonly _service = EvaluationService

  constructor () {
    this._configure()
  }

  get router (): Router {
    return this._router
  }

  private _configure (): void {
    this._router.get('', (req, res, next) => {
      try {
        const result = this._service.evaluationsMethod()
        res.status(200).json(result)
      } catch (error) {
        next(error)
      }
    })
  }
}

export = new EvaluationsRouter().router
