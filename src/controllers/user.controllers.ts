import { Response, Request } from "express";

const getAllUser = (req: Request, res: Response) => {
    const data = 'data test'
    return res.status(200).json({data})
}

export { getAllUser }