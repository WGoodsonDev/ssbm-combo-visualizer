import React, { useState } from "react";

const { stageDimensions } = require('../../../util/data-scripts/Stages');

const axisColor = "green";
const blastZonesColor = "red";


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

    const blastZones = (
        <rect fill={"transparent"}
              x={`${currentStageDimensions.xMin}`}
              y={`${currentStageDimensions.yMin}`}
              height={`${currentStageDimensions.height}`}
              width={`${currentStageDimensions.width}`}
              stroke={blastZonesColor}
              strokeWidth={"2"}/>
    );

    return (
        <g>
            {horizontalAxis}
            {verticalAxis}
            {blastZones}
        </g>
    );
}

export default DebugAxes;
