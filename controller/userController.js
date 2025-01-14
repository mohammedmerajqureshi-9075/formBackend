import { comparePassword, hashPassword } from "../authentication/bcrypt.js";
import { userCreateServices, userLoginServices } from "../services/userServices.js";

export let userCreateController =async (req,res) => {
    let {username,email,password}=req.body;
    console.log(`username ${username} email ${email} password ${password}`);
    
    try {
        let hashPass =await hashPassword(password)
        console.log(`hash password ${hashPass}`);
        let createUser =await userCreateServices(username,email,hashPass)
        console.log(createUser)
        if (createUser) {
            res.status(201).json(createUser);
        }else{
            res.status(400).json({message:"User not created"})
        }
    } catch (error) {
        console.log(`errro occured at userCreateController ${error.message}`);
    }
}
export let userLoginController =async (req,res) => {
    let {email,password}=req.body;
    try {
        let dbPass = await userLoginServices(email);
        let log = await comparePassword(password,dbPass)
        console.log(log)
        if (log) {
            res.send(`user login succesfully`)
        } else {
            res.send('user not login')
        }
      
    } catch (error) {
        console.log(`error occured at userLoginController ${error.message}`);
    }
}