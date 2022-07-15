import ExceptionHandler from '../exceptions/ExceptionHandler'

class CommentService {
  commentsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new CommentService()
