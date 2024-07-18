import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import { app, server } from './socket/socket.js';

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and cookies
app.use(express.json());
app.use(cookieParser());

// Define routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

// Uncomment the following if you serve static files from a frontend build
// import path from 'path';
// const __dirname = path.resolve();
// app.use(express.static(path.join(__dirname, '/frontend/dist')));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
// });

// Start the server and connect to MongoDB
server.listen(PORT, () => {
    connectToMongoDB()
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Failed to connect to MongoDB', err);
        });
    console.log(`Server listening on port ${PORT}`);
});
