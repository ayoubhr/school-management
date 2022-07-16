import mongoose from 'mongoose'

async function db (): Promise<void> {
  await mongoose.connect('mongodb://localhost:27017/test')
}

export default db
