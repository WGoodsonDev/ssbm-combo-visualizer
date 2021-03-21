import React, { useState } from 'react';

import ControlButton from "../visualizer/control/ControlButton";
import StageBackground from "../visualizer/svg/StageBackground";




function VizWindow(props) {

    const [currentStageId, setCurrentStageId] = useState(0);

    /* Stage IDs:
    0: Battlefield
    1: Dreamland
    2: Final Destination
    3: Fountain of Dreams
    4: Pokemon Stadium
    5: Yoshi's Story
     */
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
