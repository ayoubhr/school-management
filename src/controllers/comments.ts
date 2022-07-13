import ExceptionHandler from '../Exceptions/ExceptionHandler'

class CommentsController {
  commentsMethod (): string {
    throw new ExceptionHandler(501, 'Not implemented method')
  }
}

export = new CommentsController()
