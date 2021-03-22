import React from "react";

import DebugAxes from "../../visualizer/svg/DebugAxes";
import Origin from "./Origin";

const stages = require('../../../util/data-scripts/Stages');


function StageBackground(props) {
    return (
        <>
            <svg viewBox={stages.stageViewBoxes[props.stageId]}>
                <DebugAxes stageId={props.stageId}/>
                <Origin/>
            </svg>
            <img alt={"stage background"} src={stages.stageBackgrounds[props.stageId]}/>
        </>
    );
}

export default StageBackground;
