import ExceptionHandler from '../Exceptions/ExceptionHandler'

class EvaluationsController {
  evaluationsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new EvaluationsController()
