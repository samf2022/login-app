import { Response, Request } from "express";
import { User } from "../schemas/user.schema";

const getAllUsers = async (req: Request, res: Response) => {
    const data = await User.find()
    return res.json(data)
}

const createUsers = async (req: Request, res: Response) => {
    
    try{
        const user = await User.create(req.body)
        res.status(200)
        return res.json(req.body)
    }
    catch(e){
        console.log(e)
    }
}

export { getAllUsers, createUsers }