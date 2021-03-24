import React, { useState, useEffect } from 'react';

import ControlButton from "../visualizer/control/ControlButton";
import StageBackground from "../visualizer/svg/StageBackground";
import GameSelect from "./GameSelect/GameSelect";


/*
    VizWindow is the container for the visualization.
    It contains the actual visualization (svg windows, img tag for background), as well as
    the control buttons for the visualization.
 */

function VizWindow(props) {

    const [currentStageId, setCurrentStageId] = useState(0);
    const [axesVisible, setAxesVisible] = useState(true);
    const [originVisible, setOriginVisible] = useState(true);
    const [stageBackgroundVisible, setStageBackgroundVisible] = useState(true);
    const [blastZonesVisible, setBlastZonesVisible] = useState(true);

    const [gameData, setGameData] = useState({});

    const loadGameData = () => {

    };

    // Load game data on component mount
    useEffect(() => {
        loadGameData();
    }, []);

    /* Stage IDs:
    0: Battlefield
    1: Dreamland
    2: Final Destination
    3: Fountain of Dreams
    4: Pokemon Stadium
    5: Yoshi's Story
     */
    const nextStage = () => {
        if(currentStageId < 5)
            setCurrentStageId(currentStageId + 1);
    }

    const prevStage = () => {
        if(currentStageId > 0)
            setCurrentStageId(currentStageId - 1);
    }
    const toggleDebugAxes = () => {
        setAxesVisible(!axesVisible);
    }
    const toggleOrigin = () => {
        setOriginVisible(!originVisible);
    }

    const toggleStageBackground = () => {
        setStageBackgroundVisible(!stageBackgroundVisible);
    }

    const toggleBlastZones = () => {
        setBlastZonesVisible(!blastZonesVisible);
    }

    return (
        <section>
            <div className={"vizOuter"}>
                <div className={"vizInner"}>
                    <StageBackground stageId={currentStageId}
                                     axesVisible={axesVisible}
                                     originVisible={originVisible}
                                     stageBackgroundVisible={stageBackgroundVisible}
                                     blastZonesVisible={blastZonesVisible}
                    />
                </div>
                <div className={"controlButtons"}>
                    <ControlButton buttonText={"Prev Stage"} onClick={prevStage}/>
                    <ControlButton buttonText={"Next Stage"} onClick={nextStage}/>
                    <ControlButton buttonText={"Toggle Blast Zones"} onClick={toggleBlastZones}/>
                    <ControlButton buttonText={"Toggle Debug Axes"} onClick={toggleDebugAxes}/>
                    <ControlButton buttonText={"Toggle Origin"} onClick={toggleOrigin}/>
                    <ControlButton buttonText={"Toggle Stage Background"} onClick={toggleStageBackground}/>
                </div>
                <GameSelect/>
            </div>
        </section>
    )
}

export default VizWindow;
