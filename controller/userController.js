import { hashPassword } from "../authentication/bcrypt.js";
import { userCreateServices } from "../services/userServices.js";

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