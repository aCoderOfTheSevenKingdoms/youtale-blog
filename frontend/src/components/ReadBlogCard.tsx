import { Avatar } from "./BlogCard"


export const ReadBlogCard = ({ name, content, lastModified, profilePic }: { name: string, content: string, lastModified: string, profilePic?: string }) => {

    return <div className="flex flex-col justify-between p-2 w-1/2 h-25">
        <div className="flex gap-3 items-center">
            <div className="flex items-center gap-1.5"> 
                <Avatar name={name} profilePic={profilePic} size="small" />
                <div className="font-extralight pl-2 text-sm flex justify-center flex-col">{name}</div>
            </div>

            <div>
                <FollowButton/>
            </div>

            <div className="flex items-center gap-3">
                <div className="text-sm text-slate-500 font-thin">
                    {`${Math.ceil(content.length/100)} minute(s) read`}
                </div>
                <Cicrle/>
                <div className="text-sm text-slate-500 font-thin">
                    {lastModified}
                </div>
            </div>
        </div>

        <div>
            <LowerBar/>
        </div>
    </div>
}

const FollowButton = () => {

    return <div className="py-1 px-2 rounded-full text-sm border border-slate-600">
        Follow
    </div>
}

function Cicrle(){
    return <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
}

function LowerBar(){

    return <div className="flex justify-between items-center">
        <div className="flex items-center gap-3 text-slate-500">
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

        <div className="flex items-center gap-3 text-slate-500">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                </svg>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-4 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
        </div>
    </div>
}