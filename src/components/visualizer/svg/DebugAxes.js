import React from "react";

const { stageDimensions } = require('../../../util/data-scripts/Stages');

const axisColor = "green";


function DebugAxes(props) {

    const currentStageDimensions = stageDimensions[props.stageId];

    const horizontalAxis = (
        <line x1={`${currentStageDimensions.xMin}`} y1={"0"}
              x2={`${currentStageDimensions.xMax}`} y2={"0"}
              stroke={axisColor}
              strokeWidth={"2"}/>
    );

    const verticalAxis = (
        <line x1={"0"} y1={`${currentStageDimensions.yMin}`}
              x2={"0"} y2={`${currentStageDimensions.yMax}`}
              stroke={axisColor}
              strokeWidth={"2"}/>
    );


    return (
        <g className={"debug-axes"}>
            {horizontalAxis}
            {verticalAxis}
        </g>
    );
}

export default DebugAxes;
