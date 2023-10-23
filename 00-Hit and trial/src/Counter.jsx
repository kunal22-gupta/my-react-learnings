import { useState } from "react";

export default function Counter() {
    const [num, setNum] = useState(0);
    // Not best to do this when we want to update the previous value of num in useState().
    // const increment = () => setNum(num + 1);
    // const decrement = () => setNum(num - 1);
    // Instead, we should do this
    const increment = () => setNum((currentNum) => currentNum + 1);
    const decrement = () => setNum((currentNum) => currentNum - 1);
    return (
        <div>
            <h1>useState() example</h1>
            <h4>(Increment or Decrement the counter)</h4>
            <p>
                <button onClick={decrement}>-</button>
                <span
                    style={{
                        margin: "0 20px",
                        width: "30px",
                        height: "30px",
                        display: "inline-flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontWeight: "bold",
                        border: "2px solid teal",
                        borderRadius: "50%",
                    }}
                >
                    {num}
                </span>
                <button onClick={increment}>+</button>
            </p>
        </div>
    );
}
