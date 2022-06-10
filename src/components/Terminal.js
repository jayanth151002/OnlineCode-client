import React, { useState } from "react";
import { TextField } from '@mui/material'

const Terminal = ({ result, getInput }) => {
    console.log(result)
    const [input, setInput] = useState("Hey Jayanth")
    getInput(input)
    return (
        <div className="terminal row">
            <div className="col-6 px-5 py-3">
                <TextField label="Output" color="secondary" focused fullWidth multiline minRows={6} value={result} disabled />
            </div>
            <div className="col-6">
                <div className="col-6 px-5 py-3">
                    <TextField label="Input" color="secondary" focused fullWidth multiline minRows={6} onChange={e => setInput(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Terminal