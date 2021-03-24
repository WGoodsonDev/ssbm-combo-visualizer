import React from "react";

import DebugAxes from "../../visualizer/svg/DebugAxes";
import Origin from "./Origin";
import BlastZones from "./BlastZones";

const stages = require('../../../util/data-scripts/Stages');


function StageBackground(props) {
    return (
        <>
            <svg viewBox={stages.stageViewBoxes[props.stageId]}>
                {props.axesVisible && <DebugAxes stageId={props.stageId}/>}
                {props.originVisible && <Origin/>}
                {props.blastZonesVisible && <BlastZones stageId={props.stageId}/>}
                {/*<text x={"-200"} y={"0"} >*/}
                {/*    TEST TEXT*/}
                {/*</text>*/}
            </svg>
            {props.stageBackgroundVisible && <img alt={"stage background"} src={stages.stageBackgrounds[props.stageId]}/>}
        </>
    );
}

export default StageBackground;
