import React, { useState } from "react";

function ComboPath(props) {
    const [strokeWidth, setStrokeWidth] = useState("3");
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
            <path d={props.d}
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={strokeWidth}
                  stroke={props.color}
                  fill={"none"}
                  opacity={"0.7"}
                  filter={"drop-shadow( 1px 1px 1px rgba(0, 0, 0, .5))"}
            />
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
