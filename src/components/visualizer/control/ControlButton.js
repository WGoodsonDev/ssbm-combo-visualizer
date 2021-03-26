import React from "react";

function ControlButton(props) {

    return (
        <button type={"button"} value={props.buttonText} onClick={props.onClick}>
            {props.buttonText}
        </button>
    );
}

export default ControlButton;
