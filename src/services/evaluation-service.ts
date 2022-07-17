import ExceptionHandler from '../exceptions/exceptionHandler'

class EvaluationService {
  evaluationsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new EvaluationService()
