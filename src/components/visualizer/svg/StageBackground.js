import React from "react";

import Battlefield from "../../../assets/stages/svg/battlefield.svg";
import Dreamland from "../../../assets/stages/svg/dreamland.svg";
import FinalDestination from "../../../assets/stages/svg/FD.svg";
import FountainOfDreams from "../../../assets/stages/svg/fountain.svg";
import PokemonStadium from "../../../assets/stages/svg/stadium.svg";
import YoshisStory from "../../../assets/stages/svg/yoshis.svg";

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
        <img alt={"background"} src={stageBackgrounds[props.stageId]}/>
    );
}

export default StageBackground;
