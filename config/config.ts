import dotenv from 'dotenv'

dotenv.config()

export = {
  port: String(process.env.PORT)
}
