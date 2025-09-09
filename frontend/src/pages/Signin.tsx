import { Auth } from "../components/Auth"
import { Quote } from "../components/Quote"

export function Signin() {

    return (
        <div className="grid grid-cols-1 h-dvh w-dvw lg:grid-cols-2">
            <div className="flex felx-col items-center justify-center pt-6 lg:pt-0">
              <Auth type="signin"/>
            </div>
    
            <div className="bg-zinc-100 flex flex-col items-center justify-center py-10 mt-10 lg:py-0 lg:mt-0">
               <Quote/>
            </div>
        </div>
    )
}