import React, { useState } from "react";
import { TextField, Card } from '@mui/material'

const Terminal = ({ result, getInput }) => {
    console.log(result)
    const [input, setInput] = useState("Hey Jayanth")
    getInput(input)
    const dispOutput = () => {
        if (result.output == null || result.output == "") {
            if (result.id == 3)
                return ""
            else
                return result.message
        }
        else if (result.output)
        return result.output
    }
    return (
        <div className="terminal row">
            <div className="col-6 px-5 py-3">
                <TextField label="Output" color="secondary" focused fullWidth multiline minRows={6} value={dispOutput} />
            </div>
            <div className="col-6 px-5 py-3">
                <TextField label="Input" color="secondary" focused fullWidth multiline minRows={6} onChange={e => setInput(e.target.value)} />
            </div>
        </div>
    )
}

export default Terminal