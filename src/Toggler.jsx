import "./Toggler.css";
import { useState } from "react";

export default function Toggler() {
    const [emote, setEmote] = useState("😂");
    const [emoText, setEmoText] = useState("Hahahahahahah!");
    const changeEmote = () => {
        if (emote === "😂") {
            setEmote("😭");
            setEmoText("Waawaawaawaawaa!");
        } else {
            setEmote("😂");
            setEmoText("Hahahahahahah");
        }
    };
    return (
        <div className="Toggler">
            <h1> Click to Toggle</h1>
            <div className="reaction">
                <span onClick={changeEmote}>{emote}</span>
                <h3>{emoText}</h3>
            </div>
        </div>
    );
}
