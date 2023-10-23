import { useState } from "react";

export default function ScoreKeeper() {
    // Here we pass an object as a state
    const [scores, setScores] = useState({ p1: 0, p2: 0, p3: 0 });
    function updateP1() {
        // To update and object in State we need to pass a new Obj.
        setScores(oldObj => ({...oldObj, p1: oldObj.p1+1}));
        // For arrays: pass new array using spread operator
    }
    function updateP2() {
        setScores(oldObj => ({...oldObj, p2: oldObj.p2+1}));
    }
    return (
        <div className="ScoreKeeper">
            <h1>Score Keeper</h1>
            <div style={{display: "flex", gap: "50px"}}>
            <span>
                <h3>Player 1 Score: {scores.p1}</h3>
                <button onClick={updateP1}>Player 1 (+1)</button>
            </span>
            <span>
                <h3>Player 2 Score: {scores.p2}</h3>
                <button onClick={updateP2}>Player 2 (+1)</button>
            </span>
            </div>
        </div>
    );
}
