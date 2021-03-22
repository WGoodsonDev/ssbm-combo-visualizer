import React from "react";

const originColor = "blue";

function Origin(props) {
    return (
        <g>
            <line x1={"-5"} y1={"0"}
                  x2={"5"} y2={"0"}
                  stroke={originColor}
                  strokeWidth={"2"}/>
            <line x1={"0"} y1={"-5"}
                  x2={"0"} y2={"5"}
                  stroke={originColor}
                  strokeWidth={"2"}/>

            <text x={"-200"} y={"0"} >
                TEST TEXT
            </text>
        </g>
    );
}

export default Origin;
