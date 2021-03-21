import React, { useState } from 'react';

import ControlButton from "../visualizer/control/ControlButton";

import Battlefield from "../../assets/stages/svg/battlefield.svg";
import Dreamland from "../../assets/stages/svg/dreamland.svg";
import FinalDestination from "../../assets/stages/svg/FD.svg";
import FountainOfDreams from "../../assets/stages/svg/fountain.svg";
import PokemonStadium from "../../assets/stages/svg/stadium.svg";
import YoshisStory from "../../assets/stages/svg/yoshis.svg";

const stageBackgrounds = [
    Battlefield,
    Dreamland,
    FinalDestination,
    FountainOfDreams,
    PokemonStadium,
    YoshisStory
];

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
                    <img alt={"background"} src={stageBackgrounds[currentStageId]}/>
                    <svg>

                    </svg>
                </div>
                <div className={"controlButtons"}>
                    <ControlButton buttonText={"Next Stage"} onClick={nextStage}/>
                    <ControlButton buttonText={"Prev Stage"} onClick={prevStage}/>
                </div>
            </div>
        </section>
    )
}

export default VizWindow;
