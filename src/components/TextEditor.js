import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const TextEditor = ({ getCode }) => {
    //const [code, setCode] = useState()
    const handleEditorChange = (value) => {
        getCode(value);
    }

    return (
        <div style={{ margin: "3px solid black" }}>
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