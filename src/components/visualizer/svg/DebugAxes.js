import React, { useState } from "react";

const axisColor = "green";

function DebugAxes(props) {
    return (
        <g>
            <rect fill={"transparent"}
                  height={"100%"}
                  width={"100%"}
                  stroke={"black"}
                  strokeWidth={"2"}/>

            <line x1={"0"} y1={"50%"}
                  x2={"100%"} y2={"50%"}
                  stroke={axisColor}
                  strokeWidth={"2"}/>
            <line x1={"50%"} y1={"0"}
                  x2={"50%"} y2={"100%"}
                  stroke={axisColor}
                  strokeWidth={"2"}/>
        </g>
    );
}

export default DebugAxes;
