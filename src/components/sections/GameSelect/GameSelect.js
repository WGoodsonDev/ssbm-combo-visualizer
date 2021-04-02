import React from "react";

function GameSelect(props) {

    return (
        <div className={"game-select"}>
            <p>
                {props.statusMessage}
            </p>
            <button className={"get-game-btn"} onClick={props.getGame}>
                GET RANDOM GAME
            </button>
            <button className={"clear-games-btn"} onClick={props.clearGame}>
                CLEAR GAME
            </button>
            <div className={"game-card-list"} >
                {props.children}
            </div>
        </div>
    );
}

export default GameSelect;
