import ExceptionHandler from '../exceptions/ExceptionHandler'

class EvaluationService {
  evaluationsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new EvaluationService()
