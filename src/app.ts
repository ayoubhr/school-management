import express, { Request, Response, NextFunction } from 'express'
import config from '../config/config'
import RouteTable from './routers/RouteTable'
import ExceptionHandler from './Exceptions/ExceptionHandler'

class Server {
  public app = express()
  public router = RouteTable
}

const server = new Server()

server.app.use('/api', server.router)

server.app.use((err: ExceptionHandler, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode).json({
    status: 'error',
    statusCode: err.statusCode,
    message: err.message
  })
})

server.app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
