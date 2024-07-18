import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://prachimishra23123:g1jH3mdOYFvjNeAJ@cluster0.fyzqfnl.mongodb.net/tours_booking?retryWrites=true&w=majority")
        console.log("MongoDB connected")
    } catch (error) {
        console.log(error)
      
    }
}

export default connectToMongoDB