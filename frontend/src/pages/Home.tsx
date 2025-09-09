import { useState } from "react"
import { AppBar } from "../components/AppBar"
import { Sidebar } from "../components/SIdebar"
import { Feed } from "../components/Feed"

export const Home = () => {

    const [isSidebarOpen, setisSidebarOpen] = useState(false);
    
    return <div>
        <AppBar onMenuClick={() => setisSidebarOpen(!isSidebarOpen)} name="Tigmamanyu"/>

        { isSidebarOpen && <Sidebar toggle={isSidebarOpen} /> }

        <main className="p-4">
            { /**Main content here */ }
            <Feed/>
        </main>
    </div>
}