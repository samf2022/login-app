import { Response, Request } from "express";

const getAllUser = (req: Request, res: Response) => {
    const data = {
        user: 'Santiago',
        email: 'santiago@gmail.com'
    }
    return res.status(200).json({data})
}

export { getAllUser }