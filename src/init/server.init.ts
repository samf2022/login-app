import 'dotenv/config'
import { iServer } from '@models/server.model'
import express, { Application, Express } from 'express'
import cors from 'cors'
import { router } from '../routes/user.routes'

export class Server implements iServer {
    app: Application = express()
    port: string | undefined = process.env.PORT
    constructor(){
        this.middlewares()
        this.routes()
    }
    routes(): void {
        this.app.use('/api/v1', router)
    }
    middlewares(): void {
        this.app.use(cors())
    }
    initialized(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening on port: ${this.port}`)
        })
    }
}