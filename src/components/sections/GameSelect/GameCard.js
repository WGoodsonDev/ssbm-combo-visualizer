import React from "react";
import { characterMap, attackMap, stageMap } from "../../../util/data-scripts/ConversionTables";


// NAME (code) vs NAME (code): metadata
// character vs character: settings
// stage: settings
// stocks remaining: stats
// combo count
function GameCard(props) {
    const {
        metadata,
        settings,
        stats
    } = props;



    return(
        <div className={"gameCard"}>
            <p>
                {metadata.p1.name} ({metadata.p1.code}) vs {metadata.p2.name} ({metadata.p2.code})
            </p>
            <p>
                {characterMap[settings.p1.characterId]} vs {characterMap[settings.p2.characterId]}
            </p>
            <p>
                {stats.combos.length} combos in total
            </p>
            <p>
                Stage: {stageMap[settings.stageId]}
            </p>

        </div>
    );
}

export default GameCard;
