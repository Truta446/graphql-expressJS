import express from 'express'
import bodyParser from 'body-parser'
import expressGraphQL from 'express-graphql'
import mongoose from 'mongoose'
import { buildSchema } from 'graphql'
import routes from './routes'

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/graphql', expressGraphQL({
    schema: buildSchema(`type Query { msg: String }`),
    rootValue: { msg: () => 'Hello, World!' },
    graphiql: true,
    pretty: true
}))

mongoose.connect('mongodb://localhost:27017/graphql', { useNewUrlParser: true })

routes(app)

app.listen(3000, () => console.log('Express has been started'))