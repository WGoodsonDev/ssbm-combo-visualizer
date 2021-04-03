import React from "react";

function GameSelect(props) {

    return (
        <div className={"game-select"}>
            <p>
                {props.statusMessage}
            </p>
            <button className={"get-latest-game-btn"} onClick={props.getLatestGame}>
                GET LATEST GAME
            </button>
            <button className={"get-random-game-btn"} onClick={props.getRandomGame}>
                GET RANDOM GAME
            </button>
            <button className={"clear-games-btn"} onClick={props.clearGame}>
                CLEAR GAME
            </button>
        </div>
    );
}

export default GameSelect;
