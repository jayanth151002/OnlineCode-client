import React from "react";
import Editor from "@monaco-editor/react";

const TextEditor = () => {
    const handleEditorChange = (value, event) => {
        console.log("here is the current model value:", value);
    }

    return (
        <div style={{margin:"3px solid black"}}>
            <Editor
            height="50vh"
            defaultLanguage="javascript"
            defaultValue="// some comment"
            onChange={handleEditorChange}
        />
        </div>
    );
}

export default TextEditor