import type { Request, Response } from "express";
import { User } from "../db/models.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const userSignup = async (req: Request, res: Response) => {
    
    const { name, email, password, bio } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try{
      
        const user = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            bio: bio
        });

        if(!user){
            return res.status(400).json({ message: "User not created" });
        }

        if(!process.env.JWT_SECRET){
            throw new Error("JWT secret not defined in environment");
        }

        const token = jwt.sign({
                id: user._id,
                name: user.name
            }, 
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        res.status(201).json({ 
            message: "User created successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            } 
        });
    } catch(err){
        console.error("Signup error", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const userSignin = async (req: Request, res: Response) => {

    const { email, password } = req.body;

    try{

        const user = await User.findOne({
            email
        })

        if(!user){
            return res.status(404).json("User not found");
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" });
        }

        if(!process.env.JWT_SECRET){
            throw new Error("JWT Secret not defined in environment");
        }

        const token = jwt.sign({
            id: user._id, name: user.name
        }, process.env.JWT_SECRET,
        { expiresIn: "1h" }
        );

        res.status(200).json({
            message: "User signed in successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        });
    } catch(err){

        console.error("Signin Error", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateInfo = async (req: Request, res: Response) => {

    const { name, email, password, bio } = req.body;

    try{

        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({ message: "User not found" });
        }

        const updateData: Partial<typeof user> = {};

        if(name) updateData.name = name;
        if(bio) updateData.bio = bio;
        if(password){
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        const updatedUser = await User.findByIdAndUpdate(
            user._id,
            {
                $set: updateData
            },
            {
                new: true
            }
        );

        res.status(200).json({
            message: "User updated successfully",
            user: updatedUser
        })
       
    } catch(err){

        console.error("Update error", err);
        res.status(500).json({ message: "Server Error" });
    }
}