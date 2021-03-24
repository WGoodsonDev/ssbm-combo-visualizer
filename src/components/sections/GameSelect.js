import React, { useState, useEffect } from "react";
import http from "../../http-common";
// import GetGamesService from "../../services/get-games.service";


// Press button to populate list of games
// Make axios call to get all games
// Display in list
function GameSelect(props) {

    const [gameCardList, setGameCardList] = useState([]);

    const assembleGameCards = (data) => {
        let newList = data.map((game, idx) => (<p key={idx}>{JSON.stringify(game.metadata, null, 2)}</p>));
        console.log(newList);
        setGameCardList(newList);
    };

    const getGames = async () => {
        console.log("Attempting to get all games. This may take a second...");
        http.get("/games/getAllGames")
            .then((res) => {
                console.log("Successfully retrieved games")
                console.log(res);
                assembleGameCards([...res.data])
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
            <div className={"game-card-list"}>
                {gameCardList}
            </div>
        </div>
    );
}

export default GameSelect;
