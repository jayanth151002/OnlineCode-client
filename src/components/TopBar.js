import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const TopBar = ({ langs, getId, submit }) => {
    const [id, setId] = useState()
    const [lang, setLang] = useState('');
    const items = Object.entries(langs).map((x, i) => <MenuItem key={i} value={x[1].name}>{x[1].name}</MenuItem>)
    const Lang = name => {
        Object.entries(langs).map(x => {
            if (x[1].name === name) {
                setLang(x[1].name)
                getId(x[1].id)
            }
        })
    }
    return (
        <div className="row py-3 topbar">
            <div className="col-8">
                <div className="col-4 offset-2">
                    <div className="heading">
                        OnlineCode
                    </div>
                </div>
            </div>
            <div className="col-4 row">
                <div className="col-8">
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label" color="secondary">Language</InputLabel>
                        <Select
                            id="language"
                            value={lang}
                            label="Language"
                            onChange={(e) => { Lang(e.target.value) }}
                        >
                            {items}
                        </Select>
                    </FormControl>
                </div>
                <div className="col-4 my-2">
                    <Button variant="contained" color="success" onClick={submit}>
                        <PlayArrowIcon />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default TopBar