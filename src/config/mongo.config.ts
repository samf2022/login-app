import "dotenv/config"
import { connect } from "mongoose"

export class DB{
    constructor()
    {

    }

    async DbConnect(){
        const DB_URI = process.env.DB_URI
        if(DB_URI){
            try{
                await connect(DB_URI, {}, (err: any) => {
                    if(err){
                        console.log('Connection failed')
                    }

                    else{
                        console.log('Mongo connected')
                    }
                })
            }
            catch(e) {
                console.log(e)
            }
        }
    }
}