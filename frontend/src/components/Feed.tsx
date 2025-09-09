import { BlogCard } from "./BlogCard"
import { useBlogs } from "../hooks"

export const Feed = () => {

    const { loading, blogs } = useBlogs();

    if(loading){
        return <div className="flex flex-col items-center">
            <div>
              loading...
            </div>
        </div>
    }

    return <div className="flex flex-col items-center">
         
        <div>

            {blogs.map((blog) => {
                return <BlogCard
                blogId={blog.blogId}
                name={blog.name}
                title={blog.title}
                content={blog.content}
                lastModified={blog.lastModified}
                />
            })}
        </div>

    </div>
}
