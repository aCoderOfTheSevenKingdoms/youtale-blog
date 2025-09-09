import mongoose from 'mongoose';
import { blogSchema, userSchema } from './schema.js';

mongoose.connect(process.env.MONGO_URL || "mongodb://localhost:27017/youtale");

export const Blog = mongoose.model('Blog', blogSchema);
export const User = mongoose.model('User', userSchema);
