// This code is to show how to control my react inputs using states. 
// If we don't use state then it's not possible in react to enter a 
// new input in the input field when a value attribute is specified.

import { useState } from "react";

export default function Input() {
    const [inputVal, setInputVal] = useState("");
    return (
        <form className="Input">
            <input
                type="text"
                name="name"
                id="name"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
            />
            {/* We can't type anything inside of this input: <input type="text" value={""}/> */}
            <button>Submit</button>
        </form>
    );
}
