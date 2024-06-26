import cors from 'cors'
import dotenv from 'dotenv'
import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import path from 'path'
import { productRouter } from './routers/productRouter'
import { seedRouter } from './routers/seedRouter'
import { userRouter } from './routers/userRouter'
import { orderRouter } from './routers/orderRouter'
import { keyRouter } from './routers/keyRouter'
import typeDefs from './schemas/index'
import resolvers from './resolvers/index'
import { ApolloServer } from 'apollo-server-express'
import {
  ApolloServerPluginLandingPageLocalDefault,
  //ApolloServerPluginLandingPageProductionDefault,
} from 'apollo-server-core'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tsbookstore'
mongoose.set('strictQuery', true)
mongoose
  .connect(MONGODB_URI)
  .then(() => {
    console.log('connected to mongodb')
  })
  .catch(() => {
    console.log('error mongodb')
  })

const app = express()
/*
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:5173'],
  })
)*/
app.use(cors())

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    /*process.env.ENVIRONMENT === 'production'
      ? ApolloServerPluginLandingPageProductionDefault({
          graphRef: 'my-graph-id@my-graph-variant',
          footer: false,
        })
      :*/ ApolloServerPluginLandingPageLocalDefault({ footer: false }),
  ],
})

const PORT: number = parseInt((process.env.PORT || '4000') as string, 10)

async function startServer() {
  await server.start()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  server.applyMiddleware({ app: app as any, path: '/graphql' })

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log(`GraphQL path is http://localhost:${PORT}/graphql`)
  })
}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/products', productRouter)
app.use('/api/users', userRouter)
app.use('/api/orders', orderRouter)
app.use('/api/seed', seedRouter)
app.use('/api/keys', keyRouter)
/*
app.listen(PORT, () => {
  console.log(`server started at http://localhost:${PORT}`)
  console.log(`GraphQL path is http://localhost:${PORT}/graphql`)
})*/

app.use(express.static(path.join(__dirname, '../../frontend/dist')))
app.get('*', (req: Request, res: Response) =>
  res.sendFile(path.join(__dirname, '../../frontend/dist/index.html'))
)

startServer()
