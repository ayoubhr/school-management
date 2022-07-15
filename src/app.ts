import express from 'express'
import config from '../config/config'
import RouteTable from './routers/RouteTable'
// import ExceptionHandler from './exceptions/ExceptionHandler'
import db from './domain/models/connection'
import bodyParser from 'body-parser'

class Server {
  public app = express()
  public router = RouteTable

  get dbConnection (): Promise<void> {
    return db()
  }
}

const server = new Server()

void server.dbConnection

server.app.use(bodyParser.json())

server.app.use(bodyParser.urlencoded({ extended: true }))

server.app.use('/api', server.router)

/* server.app.use((err: ExceptionHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  })
}) */

server.app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
