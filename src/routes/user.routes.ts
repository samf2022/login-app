import { Response, Request, Router } from "express";
import { getAllUsers } from "../controllers/user.controllers";
const router: Router = Router()

router.get('/', getAllUsers)

export {router}