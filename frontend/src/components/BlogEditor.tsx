import { useRef, useState } from "react"
import type { BlogInputType } from "../utils/inputTypes";

export const BlogEditor = ({ onContentChange, setPostContents }: { onContentChange: (status: string) => void, setPostContents: React.Dispatch<React.SetStateAction<BlogInputType>> }) => {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const contentRef = useRef<HTMLTextAreaElement | null>(null);

    const typingTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const autoResize = (e : React.ChangeEvent<HTMLTextAreaElement>) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    }

    const handleTyping = (
    setter: React.Dispatch<React.SetStateAction<string>>,
    value: string
  ) => {
    setter(value);
    if(setter == setTitle){
        setPostContents({ title: value, content });
    } else {
        setPostContents({ title, content: value });
    }
    onContentChange("Saving...");
    if(typingTimeout.current) clearTimeout(typingTimeout.current);
    typingTimeout.current = setTimeout(() => {
      onContentChange("Saved");
    }, 1500); // 1.5s after stop typing
  };

    return <div className="flex flex-col items-center">
        <div className="flex flex-col w-1/2 space-y-4">
        <textarea value={title}
        onChange={(e) => handleTyping(setTitle, e.target.value) }
        onInput={autoResize}
        onKeyDown={(e) => {
            if(e.key === "Enter"){
                e.preventDefault();
                if(title.trim() === ""){
                    contentRef.current?.focus();
                }
            }
        }}
        ref={null}
        className={`resize-none text-4xl p-4 font-serif focus:outline-none
            ${title ? "text-black font-medium" : "text-slate-500"}`} 
        placeholder="Title" 
        rows={1}
        />

        <textarea 
        ref={contentRef}
        value={content}
        onChange={(e) => handleTyping(setContent, e.target.value)}
        onInput={autoResize}
        className={`resize-none text-2xl p-4 font-serif focus:outline-none
            ${content ? "text-slate-700" : "text-slate-500"}`} 
        placeholder="Tell your story..." 
        rows={3}
        />
    </div>
    </div>
}