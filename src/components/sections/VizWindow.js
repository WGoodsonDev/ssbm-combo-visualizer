import React, { useState } from 'react';
import http from "../../http-common";

import ComboViz from "../visualizer/ComboViz";
import GameSelect from "./GameSelect/GameSelect";

import { stageIdxMap, characterMap } from "../../util/data-scripts/ConversionTables";


/*
    VizWindow is the container for the visualization.
    It contains the actual visualization (svg windows, img tag for background), as well as
    the control buttons for the visualization.
 */

function VizWindow(props) {

    const [currentStageId, setCurrentStageId] = useState(0);

    // const [gameCardList, setGameCardList] = useState([]);
    const [statusMessage, setStatusMessage] = useState("");

    const [rawLoadedGame, setRawLoadedGame] = useState(undefined);
    // const [gameData, setGameData] = useState({});

    /* Stage IDs:
    0: Battlefield
    1: Dreamland
    2: Final Destination
    3: Fountain of Dreams
    4: Pokemon Stadium
    5: Yoshi's Story
     */

    const getRandomGame = async () => {
        // Clear last game data
        clearGame();
        // Get new (random) game from DB, set as rawLoadedGame
        console.log("Attempting to get a random game. This may take a second...");
        setStatusMessage("Attempting to get a game. This may take a second...");
        await http.get("/games/getRandomGame")
            .then((res) => {
                console.log("Successfully retrieved game")
                setStatusMessage("Successfully retrieved game");
                setRawLoadedGame(res.data);
                setCurrentStageId(stageIdxMap[res.data.settings.stageId]);
                // console.log(JSON.stringify(rawLoadedGame, null, 2));
            })
            .catch((err) => {
                console.log(err);
                setStatusMessage("Error: game retrieval failed");
            });
    };

    const getLatestGame = async () => {
        // Clear last game data
        clearGame();
        // Get new (latest) game from DB, set as rawLoadedGame
        console.log("Attempting to get most recent game. This may take a second...");
        setStatusMessage("Attempting to get most recent game. This may take a second...");
        await http.get("/games/getMostRecentGame")
            .then((res) => {
                console.log("Successfully retrieved game");
                setStatusMessage("Successfully retrieved game");
                setRawLoadedGame(res.data);
                setCurrentStageId(stageIdxMap[res.data.settings.stageId]);
            })
            .catch((err) => {
                console.log(err);
                setStatusMessage("Error: game retrieval failed");
            })
    }

    const clearGame = () => {
        setRawLoadedGame(undefined);
        setStatusMessage("");
    };



    return (
        <section>
            <div className={"viz-outer"}>
                <h3>
                    { rawLoadedGame ?
                        `Current Game: ${rawLoadedGame.metadata?.players[0].names.netplay} (${characterMap[rawLoadedGame.settings?.players[0].characterId]}) vs ${rawLoadedGame.metadata?.players[1].names.netplay} (${characterMap[rawLoadedGame.settings?.players[1].characterId]})`
                        : 'No game loaded'
                    }
                </h3>
                <ComboViz gameData={rawLoadedGame}
                          stageId={currentStageId}
                />
                <GameSelect getLatestGame={getLatestGame}
                            getRandomGame={getRandomGame}
                            clearGame={clearGame}
                            statusMessage={statusMessage}
                />
            </div>
        </section>
    )
}

export default VizWindow;
