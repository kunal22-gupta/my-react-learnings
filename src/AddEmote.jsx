import ShortUniqueId from "short-unique-id";
import { useState } from "react";

function randomEmoji() {
    const emojis = ["😂", "😭", "🤮", "😍", "😘", "😄", "😈", "😏"];
    return emojis[Math.floor(Math.random() * emojis.length)];
}

export default function AddEmote() {
    const uid = new ShortUniqueId();
    const [emojis, setEmojis] = useState([
        { id: uid.rnd(), emoji: randomEmoji() },
    ]);
    const addNewEmoji = () => {
        setEmojis((oldEmojis) => [
            ...oldEmojis,
            { id: uid.rnd(), emoji: randomEmoji() },
        ]);
    };
    const removeEmoji = (id) => {
        setEmojis((oldEmojis) => oldEmojis.filter((emote) => emote.id !== id));
    };
    const makeAllHearts = () => {
        setEmojis((oldEmojis) =>
            oldEmojis.map((emote) => {
                return { ...emote, emoji: "💖" };
            })
        );
    };
    return (
        <div className="AddEmote">
            <div
                className="emojis"
                style={{ fontSize: "3rem", marginBottom: "1em" }}
            >
                {emojis.map((emote) => (
                    <span
                        key={emote.id}
                        style={{ cursor: "pointer", userSelect: "none" }}
                        onClick={() => removeEmoji(emote.id)}
                    >
                        {emote.emoji}
                    </span>
                ))}
            </div>
            <button onClick={addNewEmoji}>Add new</button>
            <button onClick={makeAllHearts}>Make All Hearts</button>
        </div>
    );
}
