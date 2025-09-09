import { useState } from "react"
import { BlogEditor } from "../components/BlogEditor"
import { PublishAppBar } from "../components/PublishAppBar"
import type { BlogInputType } from "../utils/inputTypes";
import { useNavigate } from "react-router-dom";
import { postBlog } from "../api";

export const Publish = () => {

    const [saveStatus, setSaveStatus] = useState("Saved");
    const [postInputs, setPostInputs] = useState<BlogInputType>({
        title: "",
        content: ""
    });

    const navigate = useNavigate();

    const onClickHandler = () => {
        postBlog({ postInputs, navigate });
    }

    return <div>
        <PublishAppBar authorName="Tigmamanyu Sahoo" onClickHandler={onClickHandler} saveStatus={saveStatus} />
        <BlogEditor onContentChange={setSaveStatus} setPostContents={setPostInputs} />
    </div>
}