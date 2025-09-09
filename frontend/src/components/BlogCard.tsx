import { Link } from "react-router-dom";

export interface blogCardProps{ 
    blogId: string;
    name: string;
    title: string; 
    content: string; 
    lastModified: string;
    profilePic?: string;
    contentImg?: string;
}

export function BlogCard({ blogId, name, title, content, lastModified, profilePic, contentImg } : blogCardProps) {


    return <div className="border-b border-slate-200 p-4 pb-4 max-w-screen-sm">
        <Link to={`/read/${blogId}`} className="flex justify-between items-center gap-8 py-4">
        <div>
                <div className="flex items-center gap-1.5"> 
            <Avatar name={name} profilePic={profilePic} size="small" />
            <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{name}</div>
            </div>


            <div>
                <div className="text-xl font-semibold pt-2">
                    {title}
                </div>

                <div className="text-md font-thin">
                   {content.slice(0, 100) + "..."}
                </div>
            </div>

        <LowerBar lastModified={lastModified}/>
        </div>

        <div>
            <img src={contentImg} width={"200px"} height={"100px"}/>
        </div>
        {/* <div className="text-sm text-slate-500 font-thin pt-4">
            {`${Math.ceil(content.length/100)} minute(s) read`}
        </div> */}
        </Link>
    </div>
}

// function Cicrle(){
//     return <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
// }

export function Avatar({ name, profilePic, size = "small" } : { name : string, profilePic?: string, size: "small" | "big" }){

    return <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-700 rounded-full ${size === "small" ? "w-6 h-6" : "w-8 h-8"}`}>

        {
            profilePic
            ? <img src={profilePic} className="w-full h-full object-cover rounded-full" />
            : <span className={`text-xs font-extralight text-gray-600 dark:text-gray-300 ${size === "small" ? "text-xs" : "text-xl"}`}>
            {name[0]}
            </span>
        }
    </div>
}

export const LowerBar = ({ lastModified }: { lastModified: string }) => {

    return <div className="flex justify-between items-center pt-4"> 
        <div className="flex gap-4 items-center text-slate-500">
            <div className="text-slate-500 text-sm font-thin">{lastModified}</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                </svg>
            </div>
        </div>

        <div className="flex gap-4 items-center text-slate-500">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
        </div>
    </div> 
}
