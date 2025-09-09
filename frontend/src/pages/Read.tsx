import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Sidebar } from "../components/SIdebar";
import { ReadBlog } from "../components/ReadBlog";
import { useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export const Read = () => {

    const {blogId} = useParams<{ blogId: string }>();
    const [isSidebarOpen, setisSidebarOpen] = useState(false);

    if(!blogId){
        return <div>
            Invalid Blog ID
        </div>
    }

    const  { loading, blog } = useBlog({id: blogId});

    if(loading){
        return <div>
            loading...
        </div>
    }
     
    return <div>
        <AppBar name="Tigmamanyu" onMenuClick={() => setisSidebarOpen(!isSidebarOpen)}/>

        {isSidebarOpen && <Sidebar toggle={isSidebarOpen} />}

        <main>
            <ReadBlog
            name={blog?.name ?? ""}
            title={blog?.title ?? ""}
            content={blog?.content ?? ""} 
            lastModified={blog?.lastModified ?? ""}
            />
        </main>
    </div>
}