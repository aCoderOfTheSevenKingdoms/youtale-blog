import type { Request, Response } from "express";
import { Blog, User } from "../db/models.js";

export const createBlog = async (req: Request, res: Response) => {
    
    const { title, content } = req.body;

    //Save in DB
    try{
       
        //Get the authorId and authorName from jwt
        const authorId = req.user?.id;
        const authorName = req.user?.name;

        if(!authorId){
            return res.status(401).json({ message: "Unauthorized: No author ID" });
        }

        const blogId = `${authorId}12345`;

        //Save in DB
        const newBlog = await Blog.create({
            _id: blogId,
            title,
            content,
            authorId,
            authorName
        })

        await User.findByIdAndUpdate(
            authorId,
            {
                $push: { blogs: newBlog._id }
            }
        )

        res.status(201).json({
            message: "Blog created successfully",
            blog: newBlog
        })
    } catch(e){
        console.error("Create Blog Error: ", e);
        res.status(500).json({ message: "Server Error" });
    }
}

export const updateBlog = async (req: Request, res: Response) => {
    
    const { blogId } = req.params;
    const { title, content } = req.body;
    
    try{

        const blog = await Blog.findOne({ blogId });

        if(!blog){
            return res.status(404).json({ message: "Blog not found" });
        }

        const updateData: Partial<typeof blog> = {};

        if(title) updateData.title = title;
        if(content) updateData.content = content;

        const updatedBlog = await Blog.findByIdAndUpdate(
            blogId,
            updateData,
            { new: true }
        )

        res.status(200).json({
            message: "Blog updated successfully",
            blog: updatedBlog
        })
    } catch(err){

        console.error("Blog Update Error: ", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getBlog = async (req: Request, res: Response) => {
    
    const { blogId } = req.params;

    try{

        const blog = await Blog.findOne({ _id: blogId });

        if(!blog){
            return res.status(404).json({ message: "Blog not found" });
        }

        const actualBlogToReturn = {
            name: blog.authorName,
            title: blog.title,
            content: blog.content,
            lastModified: blog.updatedAt.toLocaleDateString("en-US", { day: "numeric", month: "short" })
        }

        res.status(200).json({ 
            blog: actualBlogToReturn
        })
    } catch(err){

        console.error("Blog Fetch Error: ", err);
        res.status(500).json({ message: "Server Error" });
    }
}

export const getAllBlogs = async (req: Request, res: Response) => {
    
    try{
  
        const blogs = await Blog.find({});
        
        if(blogs.length == 0){
            return res.status(404).json({ message: "No blogs found" });
        }
         
        const formattedBlogs = blogs.map((blog) => ({
           blogId: blog._id.toString(),
           name: blog.authorName,
           title: blog.title, 
           content: blog.content, 
           lastModified: new Date(blog.updatedAt || blog.createdAt).toLocaleDateString(
            "en-US",
            { day: "numeric", month: "short" } // e.g. "9 Sep"
            )
        }))

        res.status(200).json({
            blogs: formattedBlogs
        })
    } catch(err){

        console.error("Blogs Fetch Error: ", err);
        res.status(500).json({ message: "Server Error" });
    }
}