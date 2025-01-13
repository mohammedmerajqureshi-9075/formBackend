import mongoose from "mongoose"

export let dbConnection =async (dbString,dbName) => {
    try {
       await mongoose.connect(dbString+dbName)
       console.log("DB connected succesfully")
    } catch (error) {
        console.log(`error occured at db connection`)
    }
}