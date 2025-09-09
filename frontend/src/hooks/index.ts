import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import { toast } from "react-toastify";
import { api } from "../api/client";

export interface Blog{
    blogId: string;
    title: string;
    content: string;
    name: string;
    lastModified: string;
}

export const useBlogs = () => {

    const [loading, setLoading] = useState(true);
    const [blogs, setBlogs] = useState<Blog[]>([]);

    useEffect(() => {
       
        const fetchBlogs = async () => {
            try{
                const response = await api.get<{ blogs: Blog[] }>(`${BACKEND_URL}/blog/`, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                }});

                setBlogs(response.data.blogs);
                setLoading(false);
            } catch(err: any){
                
                console.error(err);
                
                toast.error(
                    err.response?.data?.message || "Internal Server Error 😵",
                {
                    position: "top-right",
                    autoClose: 4000,
                    theme: "colored",
                }
                );
            }
        }

        fetchBlogs();
    }, []);

    return {
        loading,
        blogs
    }
}

export const useBlog = ({ id }: { id: string }) => {
    
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState<Blog>();

    useEffect(() => {
       
        const fetchBlog = async () => {
            try{
                
                api.get<{ blog: Blog }>(`${BACKEND_URL}/blog/${id}`, {
                headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
                }
                }).then((response) => {
                setBlog(response.data.blog);
                setLoading(false);
                });

                toast.success("Blog fetched successfully🎉",
                    {
                        position: "top-right",
                        autoClose: 4000,
                        theme: "colored"
                    }
                )
            } catch(err: any){

                console.error(err);

                toast.error("Internal server error😵", {
                        position: "top-right",
                        autoClose: 4000,
                        theme: "colored"
                    }
                )    
            }
        }

        fetchBlog();
    }, [id]);

    return {
        loading,
        blog
    }
}
