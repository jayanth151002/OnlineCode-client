import React, { useState } from "react";
import { TextField, CircularProgress } from '@mui/material'

const Terminal = ({ result, getInput, isSubmit }) => {
    console.log(result.id)
    return (
        <div className="terminal row">
            <div className="col-6 px-5 py-3">
                {isSubmit ? <div className="loader-div col-12 px-5 py-3">
                    <CircularProgress color="secondary" size={50} />
                </div> : null}
                <TextField label="Output" color="secondary" focused fullWidth multiline minRows={6} value={isSubmit ? "" : result.output} className="outputbox" />
            </div>
            <div className="col-6 px-5 py-3">
                <TextField label="Input" color="secondary" focused fullWidth multiline minRows={6} onChange={e => getInput(e.target.value)} />
            </div>
        </div>
    )
}

export default Terminal