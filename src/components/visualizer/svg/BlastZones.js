import React from "react";

const { stageDimensions } = require('../../../util/data-scripts/Stages');

const blastZonesColor = "red";

function BlastZones(props) {

    const currentStageDimensions = stageDimensions[props.stageId];

    const blastZonesRect = (
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
            {blastZonesRect}
        </g>
    );

}

export default BlastZones;
