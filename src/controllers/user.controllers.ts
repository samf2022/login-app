import { Response, Request } from "express";

const getAllUsers = (req: Request, res: Response) => {
    const data = req.body
    return res.json(data)
}

export { getAllUsers }