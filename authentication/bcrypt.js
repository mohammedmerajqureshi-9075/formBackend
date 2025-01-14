import bcrypt from 'bcrypt'
export let hashPassword =async (plainpassword) => {
    try {
        let hashPass = await bcrypt.hash(plainpassword,10)
        return hashPass
    } catch (error) {
        console.log(`error occured at user hash password ${error.message}`)
    }
}
export let comparePassword =async (userPass,dbPass) => {
    try {
        let compare = await bcrypt.compare(userPass,dbPass)
        return compare
    } catch (error) {
        console.log(`error occured at user compare password ${error.message}`)
    }
}
