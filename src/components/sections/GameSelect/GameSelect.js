import React, { useState, useEffect } from "react";
import http from "../../../http-common";
import GameCard from "./GameCard";
// import GetGamesService from "../../services/get-games.service";


// Press button to populate list of games
// Make axios call to get all games
// Display in list
function GameSelect(props) {

    const [gameCardList, setGameCardList] = useState([]);
    const [statusMessage, setStatusMessage] = useState("");

    const assembleGameCards = (data) => {
        data.forEach(gameData => console.log(gameData));
        const gameCards = data.map((gameData, idx) => {
            let {
                metadata,
                settings,
                stats
            } = gameData;
            metadata = {
                gameStart: metadata.startAt,
                p1: {
                    name: metadata.players[0].names.netplay,
                    code: metadata.players[0].names.code
                },
                p2: {
                    name: metadata.players[1].names.netplay,
                    code: metadata.players[1].names.code
                }
            };
            settings = {
                stageId: settings.stageId,
                p1: {
                    port: settings.players[0].port,
                    characterId: settings.players[0].characterId,
                    characterColor: settings.players[0].characterColor,
                },
                p2: {
                    port: settings.players[1].port,
                    characterId: settings.players[1].characterId,
                    characterColor: settings.players[1].characterColor,
                },
                slpVersion: settings.slpVersion
            }
            stats = {
                stocks: stats.stocks,
                combos: stats.combos,
                actionCounts: stats.actionCounts,
                overall: stats.overall,
                gameComplete: settings.gameComplete
            };
            return (
                <GameCard metadata={metadata} settings={settings} stats={stats} key={idx}/>
            )
        });

        setGameCardList(gameCards);
    };

    const getGames = async () => {
        console.log("Attempting to get all games. This may take a second...");
        setStatusMessage("Attempting to get all games. This may take a second...");
        http.get("/games/getAllGames")
            .then((res) => {
                setStatusMessage("");
                console.log("Successfully retrieved games")
                console.log(res);
                assembleGameCards([...res.data]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const clearGames = () => {
        setGameCardList([]);
    };

    return (
        <div className={"game-select"}>
            <button className={"populate-games-list"} onClick={getGames}>
                GET GAMES
            </button>
            <button className={"clear-games-list"} onClick={clearGames}>
                CLEAR GAMES
            </button>
            <p>
                {statusMessage}
            </p>
            <div className={"game-card-list"}>
                {gameCardList}
            </div>
        </div>
    );
}

export default GameSelect;
