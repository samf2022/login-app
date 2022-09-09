import { Response, Request, Router } from "express";
import { getAllUser } from "../controllers/user.controllers";
const router: Router = Router()

router.get('/', getAllUser)

export {router}