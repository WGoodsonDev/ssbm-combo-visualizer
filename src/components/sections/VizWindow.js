import React, { useState } from 'react';

import ControlButton from "../visualizer/control/ControlButton";
import StageBackground from "../visualizer/svg/StageBackground";
import DebugAxes from "../visualizer/svg/DebugAxes";



function VizWindow(props) {

    const [currentStageId, setCurrentStageId] = useState(0);

    const nextStage = () => {
        if(currentStageId < 5){
            setCurrentStageId(currentStageId + 1);
        }
    }

    const prevStage = () => {
        if(currentStageId > 0){
            setCurrentStageId(currentStageId - 1);
        }
    }

    return (
        <section>
            <div className={"vizOuter"}>
                <div className={"vizInner"}>
                    <svg>
                        <DebugAxes/>
                    </svg>
                    <StageBackground stageId={currentStageId}/>
                </div>
                <div className={"controlButtons"}>
                    <ControlButton buttonText={"Prev Stage"} onClick={prevStage}/>
                    <ControlButton buttonText={"Next Stage"} onClick={nextStage}/>
                </div>
            </div>
        </section>
    )
}

export default VizWindow;
