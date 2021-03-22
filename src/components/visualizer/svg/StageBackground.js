import React from "react";

import DebugAxes from "../../visualizer/svg/DebugAxes";

import Battlefield from "../../../assets/stages/svg/battlefield_downscaled_648.svg";
import Dreamland from "../../../assets/stages/svg/dreamland_downscaled_648.svg";
import FinalDestination from "../../../assets/stages/svg/FD_downscaled_648.svg";
import FountainOfDreams from "../../../assets/stages/svg/fountain_downscaled_648.svg";
import PokemonStadium from "../../../assets/stages/svg/stadium_downscaled_648.svg";
import YoshisStory from "../../../assets/stages/svg/yoshis_downscaled_648.svg";

const stageBackgrounds = [
    Battlefield,
    Dreamland,
    FinalDestination,
    FountainOfDreams,
    PokemonStadium,
    YoshisStory
];

function StageBackground(props) {
    return (
        <React.Fragment>
            <svg>
                <DebugAxes stageId={props.stageId}/>
            </svg>
            <img alt={"background"} src={stageBackgrounds[props.stageId]}/>
        </React.Fragment>

    );
}

export default StageBackground;
