import { Link } from "react-router-dom"

export const Sidebar = ({ toggle }: { toggle: boolean }) => {

    return <aside className={`fixed left-0 w-64 h-full border-r border-slate-200 transform transition-transform duration-300 ${toggle ? "translate-x-0": "-translate-x-full"}`}>
        <ul className="flex flex-col gap-6 pt-10">
            <li><HomeBar/></li>
            <li><ProfileBar/></li>
            <li><StoriesBar/></li>
        </ul>
    </aside>
}

const HomeBar = () => {
    
    return <Link to={"/home"} className="flex gap-4 items-center px-6 ml-0.5 text-slate-700 hover:text-black focus:border-l">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
        <span className="text-md">Home</span>
    </Link>
}

const ProfileBar = () => {

    return <Link to={"/profile"} className="flex gap-4 items-center px-6 ml-0.5 text-slate-700 hover:text-black focus:border-l">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>

        <span className="text-md">Profile</span>
    </Link>
}

const StoriesBar = () => {

    return <Link to={"/stories"} className="flex gap-4 items-center px-6 ml-0.5 text-slate-700 hover:text-black focus:border-l">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
        </svg>
        <span className="text-md">Stories</span>
    </Link>
}