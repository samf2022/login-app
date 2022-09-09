import 'dotenv/config'
import { iServer } from '@models/server.model'
import express, { Application, Express } from 'express'
import cors from 'cors'
import { router } from '../routes/user.routes'
import { DB } from '../config/mongo.config'

export class Server implements iServer {
    app: Application = express()
    port: string | undefined = process.env.PORT
    constructor(){
        this.middlewares()
        this.routes()
        this.db()
    }
    routes(): void {
        this.app.use('/api/v1', router)
    }
    middlewares(): void {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
    }
    initialized(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening on port: ${this.port}`)
        })
    }
    db(): void{
        const db = new DB()
        db.DbConnect()
    }
}