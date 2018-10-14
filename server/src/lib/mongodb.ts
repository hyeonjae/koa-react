import * as mongoose from 'mongoose'
import * as dotenv from 'dotenv'

dotenv.config()

namespace mongodb {
  export let connect = async () => {
    const host = process.env.DB_HOST
    const port = process.env.DB_PORT
    const database = process.env.DB_DATABASE
    const user = process.env.DB_USER
    const pass = process.env.DB_PASSWORD

    await mongoose.connect(`mongodb://${host}:${port}/${database}`, {
      user,
      pass
    })
  }

  mongoose.connection.on('error', console.error)
  mongoose.connection.once('open', () => {
    console.log('Connected to mongod server')
  })
}

export default mongodb