import React, { useState } from 'react';
import http from "../../http-common";

import ControlButton from "../visualizer/control/ControlButton";
import StageBackground from "../visualizer/svg/StageBackground";
import GameSelect from "./GameSelect/GameSelect";

// import { stageMap } from "../../util/data-scripts/ConversionTables";
// import GameCard from "./GameSelect/GameCard";

// const _ = require("lodash");


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

    // const [gameCardList, setGameCardList] = useState([]);
    const [statusMessage, setStatusMessage] = useState("");

    const [rawLoadedGame, setRawLoadedGame] = useState([]);
    // const [gameData, setGameData] = useState({});

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
    const toggleDebugAxes = () => {setAxesVisible(!axesVisible);}
    const toggleOrigin = () => {setOriginVisible(!originVisible);}
    const toggleStageBackground = () => {setStageBackgroundVisible(!stageBackgroundVisible);}
    const toggleBlastZones = () => {setBlastZonesVisible(!blastZonesVisible);}



    // const assembleGameCards = () => {
    //     const gameCards = loadedGames.map((gameData, idx) => {
    //         let {
    //             metadata,
    //             settings,
    //             stats
    //         } = gameData;
    //         metadata = {
    //             gameStart: metadata.startAt,
    //             p1: {
    //                 name: metadata.players[0].names.netplay,
    //                 code: metadata.players[0].names.code
    //             },
    //             p2: {
    //                 name: metadata.players[1].names.netplay,
    //                 code: metadata.players[1].names.code
    //             }
    //         };
    //         settings = {
    //             stageId: settings.stageId,
    //             p1: {
    //                 port: settings.players[0].port,
    //                 characterId: settings.players[0].characterId,
    //                 characterColor: settings.players[0].characterColor,
    //             },
    //             p2: {
    //                 port: settings.players[1].port,
    //                 characterId: settings.players[1].characterId,
    //                 characterColor: settings.players[1].characterColor,
    //             },
    //             slpVersion: settings.slpVersion
    //         }
    //         stats = {
    //             stocks: stats.stocks,
    //             combos: stats.combos,
    //             actionCounts: stats.actionCounts,
    //             overall: stats.overall,
    //             gameComplete: settings.gameComplete
    //         };
    //         return (
    //             <GameCard onClick={handleCardClick}
    //                 metadata={metadata}
    //                 settings={settings}
    //                 stats={stats}
    //                 key={idx}
    //             />
    //         )
    //     });
    //
    //     setGameCardList(gameCards);
    // };

    const getGame = async () => {
        console.log("Attempting to get a game. This may take a second...");
        setStatusMessage("Attempting to get a game. This may take a second...");
        await http.get("/games/getRandomGame")
            .then((res) => {
                console.log("Successfully retrieved game")
                setStatusMessage("Successfully retrieved game");
                setRawLoadedGame(res.data);
                // console.log(JSON.stringify(rawLoadedGame, null, 2));
            })
            .catch((err) => {
                console.log(err);
                setStatusMessage("Error: game retrieval failed");
            });
    };

    const clearGame = () => {
        // setGameCardList([]);
        setRawLoadedGame([]);
        setStatusMessage("");
    };



    return (
        <section>
            <div className={"vizOuter"}>
                <h3>
                    Current Game: {rawLoadedGame.metadata?.players[0].names.netplay} ({rawLoadedGame.metadata?.players[0].names.code}) vs {rawLoadedGame.metadata?.players[1].names.netplay} ({rawLoadedGame.metadata?.players[1].names.code})
                </h3>
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
                <GameSelect getGame={getGame}
                            clearGame={clearGame}
                            statusMessage={statusMessage}>

                </GameSelect>
            </div>
        </section>
    )
}

export default VizWindow;
