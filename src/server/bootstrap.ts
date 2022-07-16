import express, { Request, Response, NextFunction } from 'express'
import config from '../../config/config'
import RouteTable from '../api/RouteTable'
import db from './connection'
import bodyParser from 'body-parser'
import ExceptionHandler from '../exceptions/ExceptionHandler'

class Server {
  public app = express()
  public router = RouteTable

  get dbConnection (): Promise<void> {
    return db()
  }
}

const server = new Server()

export function bootstrapApp (): void {
  server.dbConnection.then(() => {
    console.log('Connected to MongoDB')
  }).catch((error: string) => {
    console.log(error)
  })

  server.app.use(bodyParser.json())

  server.app.use('/api', server.router)

  server.app.use((err: ExceptionHandler, req: Request, res: Response, next: NextFunction) => {
    res.status(err.statusCode).json({
      status: 'error',
      statusCode: err.statusCode,
      message: err.message
    })
  })

  server.app.listen(config.port, () => {
    console.log(`App listening on port ${config.port}`)
  })
}
