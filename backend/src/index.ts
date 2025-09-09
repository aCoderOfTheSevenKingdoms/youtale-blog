import express from 'express';
import type { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import blogRouter from './routes/blogRouter.js'
import userRouter from './routes/userRouter.js'

//parses the secrets from .env file into key-value pairs and loads
//them into process.env
dotenv.config({ path: "./src/config/.env" });

const app: Application = express();

//middlewares
app.use(cors());
app.use(express.json());

//blog router
app.use('/api/v1/blog', blogRouter);

//user router
app.use('/api/v1/user', userRouter);

//server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})