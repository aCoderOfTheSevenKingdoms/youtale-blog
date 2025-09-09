import { Logo } from "./AppBar"
import { Avatar } from "./BlogCard"

export const PublishAppBar = ({ authorName, onClickHandler, saveStatus }: { authorName: string, onClickHandler: () => void, saveStatus: string }) => {
     
    return <div className="flex flex-col items-center">
        <div className="flex justify-between p-4 w-3/4">
        <div className="flex items-center gap-3"> 
            <div>
                <Logo/>
            </div>

            <div className="text-sm font-medium text-slate-700">
                Draft in {authorName}
            </div>

            <div className="ml-2 text-sm font-thin text-slate-500">
                {saveStatus}
            </div>
        </div>

        <div className="flex items-center gap-3">
            <div>
                <PublishButton handler={onClickHandler} />
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-5 text-slate-500 hover:text-black">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
            </div>
            <div>
                <Avatar name={authorName} size="big"/>
            </div>
        </div>
      </div>
    </div>
}

const PublishButton = ({ handler }: { handler: () => void }) => {

    return <button type="submit" onClick={handler} className="px-2 py-1 rounded-full text-white text-sm bg-green-700 hover:bg-green-600">
        Publish
    </button>
}