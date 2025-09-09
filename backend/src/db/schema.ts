import mongoose, { Document, Types } from "mongoose";

export interface IBlog extends Document{
    _id: string;
    title: string;
    content: string;
    authorId: string;
    authorName: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUser extends Document{
    name: string;
    email: string;
    password: string;
    bio?: string;
    blogs: string[];
    createdAt: Date;
    updatedAt: Date;
}

export const userSchema = new mongoose.Schema<IUser>({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 8
    },
    bio: {
        type: String
    },
    blogs: [
        {
            type: String,
            ref: 'Blog'
        }
    ]
}, { timestamps: true })

export const blogSchema = new mongoose.Schema<IBlog>({
    _id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    authorId: { type: String, required: true },
    authorName: { type: String, required: true },
}, {
    timestamps: true
})