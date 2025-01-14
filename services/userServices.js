import userModel from "../model/userModel.js"

export let userCreateServices =async (username,email,password) => {
    try {
        
        let user =  userModel({username,email,password})
        let userSave =await user.save()
        return userSave;
    } catch (error) {
        console.log(`error occured at user create services ${error.message}`)
    }
}
export let userLoginServices =async (email) => {
    try {
        let dbPass = await userModel.findOne({email});
        return dbPass.password;

    } catch (error) {
        console.log(`error occured at user login servics ${error.message}`)
    }
}