// const Express = require('express');
import express from 'express';
const app = express();
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import likeRoutes from './routes/likes.js'
import commentRoutes from './routes/comments.js'
import authRoutes from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'

app.use(express.json());
app.use(cookieParser());
app.use(cors())

app.use('/api/users',userRoutes);
app.use('/api/posts',postRoutes);
app.use('/api/comments',commentRoutes);
app.use('/api/likes',likeRoutes);
app.use('/api/auth',authRoutes);

app.listen(8800,()=>{
    console.log("API Working");
})