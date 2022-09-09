import { Response, Request, Router } from "express";
const router: Router = Router()

router.get('/', (req, res) => {res.send('Hello, World!')})

export {router}