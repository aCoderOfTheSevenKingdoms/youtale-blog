import { email, z } from "zod";
import type { Request, Response, NextFunction } from "express";

const userSchema = z.object({
    name: z.string().min(3).max(20).regex(/^[A-Za-z ]+$/),
    email: z.string().email(),
    password: z.string().min(8),
    bio: z.string().max(200).optional()
});

const userLoginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const updateInfoSchema = z.object({
    name: z.string().min(3).max(20).regex(/^[A-Za-z ]+$/).optional(),
    email: z.string().email().optional(),
    password: z.string().min(8).optional(),
    bio: z.string().max(200).optional()
})

const createBlogSchema = z.object({
    title: z.string(),
    content: z.string(),
})

const updateBlogSChema = z.object({
    title: z.string().optional(),
    content: z.string().optional()
})

const validate = (schema: z.ZodSchema<any>) => 
    (req: Request, res: Response, next: NextFunction) => {
    
    const parsed = schema.safeParse(req.body);

    if(!parsed.success){
        return res.status(400).json({ 
            message: "Invalid Input",
            errors: parsed.error.issues.map(err => ({
                path: err.path.join("."),
                message: err.message
            }))
         });
    }

    req.body = parsed.data;
    next();
} 
    

export const inputValidationMiddleware = validate(userSchema);
export const loginInputValidationMiddleware = validate(userLoginSchema);
export const updateInfoMiddleware = validate(updateInfoSchema);
export const createBlogMiddleware = validate(createBlogSchema);
export const updateBlogMiddleware = validate(updateBlogSChema);


