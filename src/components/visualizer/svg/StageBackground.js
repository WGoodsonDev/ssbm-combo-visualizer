import React from "react";

import DebugAxes from "../../visualizer/svg/DebugAxes";
import Origin from "./Origin";
import BlastZones from "./BlastZones";

import { stageBackgrounds } from "../../../util/data-scripts/Stages";

function StageBackground(props) {
    return (
        <img alt={"stage background"} src={stageBackgrounds[props.stageId]}/>
    );
}

export default StageBackground;
