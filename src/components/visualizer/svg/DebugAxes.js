import React, { useState } from "react";

const axisColor = "green";

function DebugAxes(props) {

    const zeroHeight = [
        64.77, // Battlefield
        67.02, // Dreamland
        57.32, // Final Destination
        58.06, // Fountain of Dreams
        61.86, // Pokemon Stadium
        64.86, // Yoshi's story
    ];

    return (
        <g>
            <rect fill={"transparent"}
                  height={"100%"}
                  width={"100%"}
                  stroke={"green"}
                  strokeWidth={"2"}/>
            {/*Horizontal Axis*/}
            <line x1={"0"} y1={`${zeroHeight[props.stageId]}%`}
                  x2={"100%"} y2={`${zeroHeight[props.stageId]}%`}
                  stroke={axisColor}
                  strokeWidth={"2"}/>
            {/*Vertical Axis*/}
            <line x1={"50%"} y1={"0"}
                  x2={"50%"} y2={"100%"}
                  stroke={axisColor}
                  strokeWidth={"2"}/>
        </g>
    );
}

export default DebugAxes;
