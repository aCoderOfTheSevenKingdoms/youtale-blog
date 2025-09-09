import { ReadBlogCard } from "./ReadBlogCard"

export const ReadBlog = ({ name, title, content, lastModified }: { name: string, title: string, content: string, lastModified: string }) => {

    return <div className="flex flex-col items-center gap-8 mt-4">

        <div className="break-words font-bold font-serif text-4xl w-1/2">
            {title}
        </div>

        <ReadBlogCard 
            name={name}
            content={content}
            lastModified={lastModified}
            profilePic="/blogProjectImg.webp"
        />

        <div className="break-words text-xl text-slate-700 font-serif w-1/2">
            {content}
        </div>
    </div>
}