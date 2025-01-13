import express from 'express';
import { userCreateController } from '../controller/userController.js';

let userRoute = express.Router();
userRoute.post('/sign',userCreateController)
export default userRoute;