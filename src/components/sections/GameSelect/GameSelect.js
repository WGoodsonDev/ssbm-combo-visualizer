import React from "react";

function GameSelect(props) {

    return (
        <div className={"game-select"}>
            <button className={"get-game-btn"} onClick={props.getGame}>
                GET RANDOM GAME
            </button>
            <button className={"clear-games-btn"} onClick={props.clearGame}>
                CLEAR GAME
            </button>
            <p>
                {props.statusMessage}
            </p>
            <div className={"game-card-list"} >
                {props.children}
            </div>
        </div>
    );
}

export default GameSelect;
