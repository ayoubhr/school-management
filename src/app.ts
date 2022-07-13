import express from 'express'
import config from '../config/config'
import RouteTable from './routers/RouteTable'

class Server {
  public app = express()
  public router = RouteTable
}

const server = new Server()

server.app.use('/api', server.router)

server.app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}`)
})
