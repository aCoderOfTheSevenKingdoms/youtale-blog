import { z } from 'zod';

const signupSchema = z.object({
    name: z.string().min(3).max(20).regex(/^[A-Za-z ]+$/),
    email: z.string().email(),
    password: z.string().min(8),
    bio: z.string().max(200).optional()
})

const loginSChema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

const blogInputSchema = z.object({
    title: z.string(),
    content: z.string(),
})

export type SignupInputType = z.infer<typeof signupSchema>;
export type LoginInputType = z.infer<typeof loginSChema>;
export type BlogInputType = z.infer<typeof blogInputSchema>;