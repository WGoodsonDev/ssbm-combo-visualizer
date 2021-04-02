import React, { useState } from "react";

function ComboPath(props) {
    const [strokeWidth, setStrokeWidth] = useState("2");
    const [isTooltipOpen, setTooltipOpen] = useState(false);

    const highlight = () => {
        setStrokeWidth("5");
        setTooltipOpen(true);
    }
    const unHighlight = () => {
        setStrokeWidth("3");
        setTooltipOpen(false);
    }

    return (
        <g className={"combo-path"}>
            <path d={props.d}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={strokeWidth}
                  stroke={props.color}
                  fill={"none"}
                  opacity={"0.7"}
                  filter={"drop-shadow( 1px 1px 1px rgba(0, 0, 0, .5))"}
            />
            <rect x={props.positionData[props.positionData.length-1].positionX} // Square at end of combo path
                  y={props.positionData[props.positionData.length-1].positionY}
                  width={"5px"}
                  height={"5px"}
                  fill={props.color}
            />
            <circle cx={props.positionData[0].positionX} // Circle at beginning of combo path
                    cy={props.positionData[0].positionY}
                    r={"4px"}
                    fill={props.color}
            />
        </g>

    );
}

export default ComboPath;


// <path onMouseOver={highlight}
//       onMouseOut={unHighlight}
//       d={props.d}
//       strokeLinecap={"round"}
//       strokeLinejoin={"round"}
//       strokeWidth={strokeWidth}
//       stroke={"green"}
//       fill={"none"}
//       opacity={"0.7"}
//       filter={"drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7))"}
// />
