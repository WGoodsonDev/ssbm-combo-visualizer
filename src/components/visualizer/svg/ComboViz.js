import React, { useState, useEffect } from "react";
import Combo from "./Combo";
import {stageViewBoxes} from "../../../util/data-scripts/Stages";
import DebugInfo from "./DebugInfo";
import StageBackground from "./StageBackground";
import ControlButton from "../control/ControlButton";

function ComboViz(props) {

    const [comboArray, setComboArray] = useState([]);
    const [currentCombo, setCurrentCombo] = useState(0);

    const [axesVisible, setAxesVisible] = useState(true);
    const [originVisible, setOriginVisible] = useState(true);
    const [blastZonesVisible, setBlastZonesVisible] = useState(true);


    const toggleDebugAxes = () => {setAxesVisible(!axesVisible);}
    const toggleOrigin = () => {setOriginVisible(!originVisible);}
    const toggleBlastZones = () => {setBlastZonesVisible(!blastZonesVisible);}

    const loadData = () => {
        if(props.gameData){
            // Take game data, separate into combos
            let {
                frames,
                stats
            } = props.gameData;
            // Make an array of all frames, instead of having them in an object with numbered keys
            const framesArray = Object.values(frames);
            // Need to filter out combos under a certain length (3 to start, should be controllable)
            const filteredCombos = stats.combos.filter(combo => combo.moves.length >= 3);
            // Combine combos and their corresponding frames into one data structure
            const combosPlusFrames = filteredCombos.map(combo => {
                const comboFrames = framesArray.slice(combo.startFrame, combo.endFrame + 1);
                return {
                    combo,
                    comboFrames
                }
            });
            console.log("comboPlusFrames: ", combosPlusFrames);
            // Construct array of Combo components
            const comboComponentArray = combosPlusFrames.map((comboAndFrames, idx) => {
                return (
                    <Combo stageId={props.stageId} data={comboAndFrames} key={idx}/>
                );
            });
            setComboArray(comboComponentArray);
            console.log("comboArray: ", comboArray);
        }
    }

    useEffect(loadData, [props.gameData]);

    return (
        <>
            <div className={"vizInner"}>
                <svg className={"viz-svg"} viewBox={stageViewBoxes[props.stageId]}>
                    <DebugInfo stageId={props.stageId}
                               axesVisible={axesVisible}
                               originVisible={originVisible}
                               blastZonesVisible={blastZonesVisible}/>

                    { comboArray.length ?
                        comboArray[currentCombo]
                        : null
                    }
                </svg>
                <StageBackground stageId={props.stageId}/>
            </div>
            <div className={"controlButtons"}>
                <ControlButton buttonText={"Toggle Blast Zones"} onClick={toggleBlastZones}/>
                <ControlButton buttonText={"Toggle Debug Axes"} onClick={toggleDebugAxes}/>
                <ControlButton buttonText={"Toggle Origin"} onClick={toggleOrigin}/>
            </div>
        </>
    );
}

export default ComboViz;
