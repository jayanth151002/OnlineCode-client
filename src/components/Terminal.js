import React, { useState } from "react";
import { TextField, Card } from '@mui/material'

const Terminal = ({ result, getInput }) => {

    return (
        <div className="terminal row">
            <div className="col-6 px-5 py-3">
                <TextField label="Output" color="secondary" focused fullWidth multiline minRows={6} value={result.output} />
            </div>
            <div className="col-6 px-5 py-3">
                <TextField label="Input" color="secondary" focused fullWidth multiline minRows={6} onChange={e => getInput(e.target.value)} />
            </div>
        </div>
    )
}

export default Terminal