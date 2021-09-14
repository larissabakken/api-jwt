import { Router } from "express";

import authMiddleware from "../src/app/middlewares/authMiddleware"; 

import UserController from "../src/app/controllers/UserController";
import AuthController from "../src/app/controllers/AuthController";

const router = Router();

router.post('/users', UserController.store);
router.post('/auth', AuthController.authenticate);
router.get('/user', authMiddleware, UserController.index);

export default router;