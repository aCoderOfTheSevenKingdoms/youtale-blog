import { Router } from "express";

import { createBlog, updateBlog, getBlog, getAllBlogs } from "../controllers/blogController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createBlogMiddleware, updateBlogMiddleware } from "../middlewares/inputValidation.js";

const router = Router();

router.use(authMiddleware);

router.post('/', createBlogMiddleware, createBlog);
router.put('/:blogId', updateBlogMiddleware, updateBlog);
router.get('/:blogId', getBlog);
router.get('/', getAllBlogs);

export default router;