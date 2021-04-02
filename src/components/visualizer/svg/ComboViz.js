import React, { useState, useEffect } from "react";
import Combo from "./Combo";
import { stageViewBoxes, stageNamesById } from "../../../util/data-scripts/Stages";
import DebugInfo from "./DebugInfo";
import StageBackground from "./StageBackground";
import ControlButton from "../control/ControlButton";

function ComboViz(props) {

    const [comboDataArray, setComboDataArray] = useState([]);
    const [comboComponentArray, setComboComponentArray] = useState([]);
    const [currentComboIdx, setCurrentComboIdx] = useState(0);
    const [minComboLength, setMinComboLength] = useState(3);

    const [curatedData, setCuratedData] = useState({});

    const [axesVisible, setAxesVisible] = useState(true);
    const [originVisible, setOriginVisible] = useState(true);
    const [blastZonesVisible, setBlastZonesVisible] = useState(true);


    const toggleDebugAxes = () => {
        setAxesVisible(!axesVisible);
    }
    const toggleOrigin = () => {
        setOriginVisible(!originVisible);
    }
    const toggleBlastZones = () => {
        setBlastZonesVisible(!blastZonesVisible);
    }

    const nextCombo = () => {
        if (comboComponentArray.length && currentComboIdx < comboComponentArray.length - 1) {
            setCurrentComboIdx(currentComboIdx + 1);
        }
    }

    const prevCombo = () => {
        if (comboComponentArray.length && currentComboIdx > 0) {
            setCurrentComboIdx(currentComboIdx - 1);
        }
    }

    const loadData = () => {
        setCurrentComboIdx(0);
        setComboComponentArray([]);
        setComboDataArray([]);
        if (props.gameData) {
            // Take game data, separate into combos and stats
            let {
                frames,
                stats,
                settings
            } = props.gameData;
            // Make an array of all frames, instead of having them in an object with numbered keys
            const framesArray = Object.values(frames);
            // Need to filter out combos under a certain length (2 to start, should be controllable)
            const filteredCombos = stats.combos.filter(combo => combo.moves.length >= minComboLength);
            // Combine combos and their corresponding frames into one data structure
            const combosPlusFrames = filteredCombos.map(combo => {
                const comboFrames = framesArray.slice(combo.startFrame, combo.endFrame);
                return {
                    combo,
                    comboFrames
                }
            });
            setComboDataArray(combosPlusFrames);
            console.log("comboDataArray: ", comboDataArray)

            // Construct array of Combo components
            const comboComponentArray = combosPlusFrames.map((comboAndFrames, idx) => {
                return (
                    <Combo stageId={props.stageId} data={comboAndFrames} key={idx}/>
                );
            });
            setComboComponentArray(comboComponentArray);
            console.log("comboComponentArray: ", comboComponentArray);

            // Extract detailed statistics from data
            // Stage
            const stageName = stageNamesById[settings.stageId];
            // Player 1 Combos
            const p1ComboCount = filteredCombos.filter(combo => combo.playerIndex === 0).length;
            const p1DeathComboCount = filteredCombos.filter(combo => combo.playerIndex === 0 && combo.didKill).length;
            // Player 2 Combos
            const p2ComboCount = filteredCombos.filter(combo => combo.playerIndex === 1).length;
            const p2DeathComboCount = filteredCombos.filter(combo => combo.playerIndex === 1 && combo.didKill).length;
            // Total Combos
            const totalComboCount = filteredCombos.length;
            const totalDeathComboCount = filteredCombos.filter(combo => combo.didKill).length;
            // Find length of longest combo
            const maxComboLength = Math.max(...stats.combos.map(combo => combo.moves.length));
            // Count how many combos end in KO
            const deathComboCount = stats.combos.filter(combo => combo.didKill).length;

            setCuratedData({
                stageName: stageName,
                p1ComboCount: p1ComboCount,
                p1DeathComboCount: p1DeathComboCount,
                p2ComboCount: p2ComboCount,
                p2DeathComboCount: p2DeathComboCount,
                totalComboCount: totalComboCount,
                totalDeathComboCount: totalDeathComboCount,
                maxComboLength: maxComboLength,
                deathComboCount: deathComboCount
            });
        }
    }


    useEffect(loadData, [props.gameData]);

    return (
        <>
            <div className={"viz-inner"}>
                <svg className={"viz-svg"} viewBox={stageViewBoxes[props.stageId]}>
                    <DebugInfo stageId={props.stageId}
                               axesVisible={axesVisible}
                               originVisible={originVisible}
                               blastZonesVisible={blastZonesVisible}/>

                    {comboComponentArray.length ?
                        comboComponentArray[currentComboIdx]
                        : null
                    }
                </svg>
                <StageBackground stageId={props.stageId}/>
            </div>
            {props.gameData ?
                <div className={"stats-area"}>
                    <table className={"combo-hits-table"}>
                        <caption>Current Combo Stats ({currentComboIdx + 1} / {curatedData?.totalComboCount})</caption>
                        <tbody>
                        <tr>
                            <th>Attack Hit</th>
                            <th>Start %</th>
                            <th>End %</th>
                            <th>Damage Dealt (%)</th>
                        </tr>
                        <tr>
                            {/*{comboHitArray}*/}
                        </tr>
                        </tbody>
                    </table>
                    <table className={"game-stats-table"}>
                        <caption>Whole Game Stats</caption>
                        <tbody>
                        <tr>
                            <th>Stage</th>
                            <th>Minimum Combo Length</th>
                            <th>Current Combo</th>
                            <th>Player 1 Combos</th>
                            <th>Player 2 Combos</th>
                            <th>Total Combos</th>
                            <th>Player 1 Death Combos</th>
                            <th>Player 2 Death Combos</th>
                            <th>Total Death Combos</th>
                        </tr>
                        <tr>
                            <td>{curatedData?.stageName}</td>
                            <td>{minComboLength}</td>
                            <td>{currentComboIdx + 1}</td>
                            <td>{curatedData?.p1ComboCount}</td>
                            <td>{curatedData?.p2ComboCount}</td>
                            <td>{curatedData?.totalComboCount}</td>
                            <td>{curatedData?.p1DeathComboCount}</td>
                            <td>{curatedData?.p2DeathComboCount}</td>
                            <td>{curatedData?.totalDeathComboCount}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                : null
            }
            <div className={"control-buttons"}>
                <ControlButton buttonText={"Toggle Blast Zones"} onClick={toggleBlastZones}/>
                <ControlButton buttonText={"Toggle Debug Axes"} onClick={toggleDebugAxes}/>
                <ControlButton buttonText={"Toggle Origin"} onClick={toggleOrigin}/>
                <ControlButton buttonText={"Previous Combo"} onClick={prevCombo}/>
                <ControlButton buttonText={"Next Combo"} onClick={nextCombo}/>
            </div>
        </>
    );
}

export default ComboViz;
