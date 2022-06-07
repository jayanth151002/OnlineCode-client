import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const TopBar = ({ langs }) => {
    // const items = langs.map(x => {
    //     return (
    //         <MenuItem value={x.id}>{x.name}</MenuItem>
    //     )
    // })
    const items = Object.entries(langs).map(x => <MenuItem value={x[1].id}>{x[1].name}</MenuItem>)
    return (
        <div className="m-5" style={{ width: "300px" }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    id="language"
                    value={null}
                    label="Language"
                >
                    {items}
                </Select>
            </FormControl>
        </div>
    )
}

export default TopBar