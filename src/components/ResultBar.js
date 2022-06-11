import React from "react";

const ResultBar = ({ result }) => {
    if (result.id == "")
        return (
            <div className="resultbar" style={{ backgroundColor: "white" }}>

            </div>
        )
    else if (result.id == 3)
        return (
            <div className="resultbar" style={{ backgroundColor: "rgb(168, 249, 110)" }}>
                <div className="offset-2 col-6 py-1">
                    <h5>Your code is accepted, the code run time is {result.time}s</h5>
                </div>
            </div>
        )
    else
        return (
            <div className="resultbar" style={{ backgroundColor: "rgb(248, 89, 89)" }}>
                <div className="offset-2 col-6 py-1">
                    <h5>
                        Error: {result.desc}
                    </h5>
                </div>
            </div>
        )
}

export default ResultBar