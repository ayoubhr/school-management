import ExceptionHandler from '../exceptions/exceptionHandler'

class CommentService {
  commentsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new CommentService()
