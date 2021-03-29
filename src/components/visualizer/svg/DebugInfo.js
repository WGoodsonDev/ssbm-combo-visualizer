import React from "react";

import DebugAxes from "./DebugAxes";
import BlastZones from "./BlastZones";
import Origin from "./Origin";

function DebugInfo(props) {
    return (
        <>
            {props.axesVisible && <DebugAxes stageId={props.stageId}/>}
            {props.originVisible && <Origin/>}
            {props.blastZonesVisible && <BlastZones stageId={props.stageId}/>}
        </>
    )

}

export default DebugInfo;
