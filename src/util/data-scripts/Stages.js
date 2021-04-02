import Battlefield from "../../assets/stages/svg/battlefield_downscaled_648.svg";
import Dreamland from "../../assets/stages/svg/dreamland_downscaled_648.svg";
import FinalDestination from "../../assets/stages/svg/FD_downscaled_648.svg";
import FountainOfDreams from "../../assets/stages/svg/fountain_downscaled_648.svg";
import PokemonStadium from "../../assets/stages/svg/stadium_downscaled_648.svg";
import YoshisStory from "../../assets/stages/svg/yoshis_downscaled_648.svg";

const stageNames = {
    0: "Battlefield",
    1: "Dream Land N64",
    2: "Final Destination",
    3: "Fountain of Dreams",
    4: "Pokémon Stadium",
    5: "Yoshi's Story"
}

const stageBackgrounds = {
    0: Battlefield,
    1: Dreamland,
    2: FinalDestination,
    3: FountainOfDreams,
    4: PokemonStadium,
    5: YoshisStory
};

const stageDimensions = {
    0: { // Battlefield
        xMin: -224,
        yMin: -108.8,
        xMax: 224,
        yMax: 200,
        width: 448,
        height: 308.8
    },
    1: { // Dreamland N64
        xMin: -255,
        yMin: -123,
        xMax: 255,
        yMax: 250,
        width: 510,
        height: 373
    },
    2: { // Final Destination
        xMin: -246,
        yMin: -140,
        xMax: 246,
        yMax: 188,
        width: 492,
        height: 328
    },
    3: { // Fountain of Dreams
        xMin: -198.75,
        yMin: -146.25,
        xMax: 198.75,
        yMax: 202.5,
        width: 397.5,
        height: 348.75
    },
    4: { // Pokemon Stadium
        xMin: -230,
        yMin: -111,
        xMax: 230,
        yMax: 180,
        width: 460,
        height: 291
    },
    5: { // Yoshi's story
        xMin: -175.5,
        yMin: -91,
        xMax: 173.6,
        yMax: 168,
        width: 349.3,
        height: 259
    }
}

const stageViewBoxes = { // minX minY width height
    0: "-224 -108.8 448 308.8",
    1: "-255 -123 510 373",
    2: "-246 -140 492 328",
    3: "-198.75 -146.25 397.5 348.75",
    4: "-230 -111 460 291",
    5: "-175.7 -91 349.3 259"
};

export {
    stageNames,
    stageDimensions,
    stageBackgrounds,
    stageViewBoxes
}
