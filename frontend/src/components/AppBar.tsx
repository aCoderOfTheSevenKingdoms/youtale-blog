import { Link } from "react-router-dom"
import { Avatar } from "./BlogCard"

export const AppBar = ({ name, onMenuClick }: { name: string, onMenuClick: () => void }) => {
    
    return <div className="flex justify-between p-3 border-b border-slate-200">
        <div className="flex items-center gap-3">
            <div>
                <Menu onClick={onMenuClick} />
            </div>
            <div><Logo/></div>
            <div className="ml-3">
                <SearchBar/>
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div><WriteBlogButton/></div>
            <Link to={"/profile"} className="mr-2">
              <Avatar name={name} size="big"/>
            </Link>
        </div>
    </div>
}

export const SearchBar = () => {

    return <div className="group flex items-center gap-2 p-1.5 rounded-full bg-slate-50 text-sm">
        <div className="p-1.5">
            <svg className="w-4 h-4 text-gray-500 transition-colors duration-200 group-focus-within:text-black group-focus-within:drop-shadow-[0_0_4px_rgba(59,130,246,0.8)]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" placeholder="Search" className="border-none w-44 focus:outline-none focus:ring-0"/>
    </div>
}

export const Menu = ({ onClick }: { onClick: () => void }) => {

    return <button onClick={onClick} className="p-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-slate-500 hover:text-black">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
    </button>
}

export const Logo = () => {

    return <div className="text-2xl font-serif font-extrabold">
        YouTale
    </div>
}

export const WriteBlogButton = () => {

    return <Link to={"/publish"} className="flex items-center gap-1 p-1.5 text-slate-600 hover:text-black">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
        </svg>
        <span className="text-sm">Write</span>
    </Link>
}