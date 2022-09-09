import { Response, Request } from "express";

const getAllUser = (req: Request, res: Response) => {
    const data = req.body
    return res.json(data)
}

export { getAllUser }