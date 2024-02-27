import express from 'express';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js'
import messageRoutes from './routes/message.routes.js'
import userRoutes from './routes/user.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';
import {app, server} from './socket/socket.js'


const PORT = process.env.PORT || 5000
dotenv.config();
app.use(express.json())  // to accept json data in body
app.use(cookieParser())


// app.get('/', (req, res) => {
//     // root route http://localhost:5000/
//     res.send('Hello World!!');
// })

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)
app.use("/api/users", userRoutes)

server.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server listening on port ${PORT}`);
})