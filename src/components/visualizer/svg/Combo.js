import React, { useState, useEffect } from "react";
import * as d3 from "d3";
import ComboPath from "./ComboPath";

const { attackMap, characterMap } = require("../../../util/data-scripts/ConversionTables");
const { stageDimensions } = require("../../../util/data-scripts/Stages");


function Combo(props) {

    const [comboPathOffense, setComboPathOffense] = useState(null);
    const [comboPathDefense, setComboPathDefense] = useState(null);


    // Define scales for x, y axes
    const xScale = d3.scaleLinear()
        .domain([stageDimensions[props.stageId].xMin, stageDimensions[props.stageId].xMax])
        .range([stageDimensions[props.stageId].xMin, stageDimensions[props.stageId].xMax]);
    const yScale = d3.scaleLinear()
        .domain([stageDimensions[props.stageId].yMin, stageDimensions[props.stageId].yMax])
        .range([stageDimensions[props.stageId].yMin, stageDimensions[props.stageId].yMax]);

    const pathGenerator = d3.line()
        .x(d => xScale(d.positionX))
        .y(d => yScale(d.positionY));

    function generateComboPaths() {
        // Extract necessary data from props
        const moves = props.data.combo.moves;
        // Filter data to only what we need for rendering paths (in this case, position data)
        const offensePositionData = props.data.comboFrames.map(cFrame => {
            return {
                positionX: cFrame.players[0].post.positionX,
                positionY: cFrame.players[0].post.positionY
            };
        });
        const offensePath = (
            <ComboPath isOffense={true} d={pathGenerator(offensePositionData)} positionData={offensePositionData} color={"green"}/>
        );
        setComboPathOffense(offensePath);

        const defensePositionData = props.data.comboFrames.map(cFrame => {
            return {
                positionX: cFrame.players[1].post.positionX,
                positionY: cFrame.players[1].post.positionY
            };
        });
        const defensePath = (
            <ComboPath isOffense={false} d={pathGenerator(defensePositionData)} positionData={defensePositionData} color={"red"}/>
        );
        setComboPathDefense(defensePath);
    }

    useEffect(generateComboPaths, [props.data]);

    return (
        props.data?
        <g className={"combo"}>
            { comboPathDefense }
            { comboPathOffense }
        </g>
            : null
    );
}

export default Combo;
