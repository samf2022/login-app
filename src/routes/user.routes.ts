import { Response, Request, Router } from "express";
import { createUsers, getAllUsers } from "../controllers/user.controllers";
const router: Router = Router()

router.get('/', getAllUsers)
router.post('/', createUsers)

export {router}