import express from 'express';
import { userCreateController, userLoginController } from '../controller/userController.js';

let userRoute = express.Router();
userRoute.post('/sign',userCreateController)
userRoute.post('/login',userLoginController)
export default userRoute;