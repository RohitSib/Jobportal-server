// code to connect the mongodb with express

//mongooose connection
import mongoose from "mongoose"


const connectDB = async () =>{
    try{
        const conn =await mongoose.connect(process.env.MONGODB_URL)
        console.log("Succesfully connected to MONGODB")
    }
    catch(error){
        console.log(`MONGO DB error: ${error}  `)
    }
}


export default connectDB;









