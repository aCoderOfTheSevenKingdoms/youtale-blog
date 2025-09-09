import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from 'express';

export interface CustomJwtPayload extends JwtPayload{
    id: string;
    name: string;
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization;

    if(!authHeader?.startsWith("Bearer ")){
        return res.status(401).json({ message: "Unauthorized" })
    }

    const token = authHeader.split(" ")[1];

    if(!token){
        return res.status(401).json({ message: "No token provided" });
    }

    try{
       
       const decoded = jwt.verify(token, process.env.JWT_SECRET!);
 
       if (typeof decoded === "string" || !decoded) {
        throw new Error("Invalid token");
       }

       const userPayload = decoded as unknown as CustomJwtPayload;
       req.user = userPayload;
       next();
    } catch{
       return res.status(401).json({ message: "Invalid Token" });
    }
}