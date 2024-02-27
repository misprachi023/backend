import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
      
    }
}

export default connectToMongoDB