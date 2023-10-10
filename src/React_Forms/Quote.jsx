import "./Quote.css"
import { useEffect, useState } from "react";

const RANDOM_QUOTE_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

export default function Quote() {
    const [quote, setQuote] = useState({
        text: "",
        author: "",
        isLoading: true,
    });

    // Fetch new quote 
    const newQuote = async () => {
        const response = await fetch(RANDOM_QUOTE_URL);
        const jsonResponse = await response.json();
        const randomQuote = {...jsonResponse.quote, isLoading: false};
        setQuote(randomQuote);
    };

    useEffect(() => {
        newQuote();
    }, []);

    return (
        <div className="Quote">
            {quote.isLoading ? (
                <div className="spinner"></div>
            ) : (
                <div className="text">
                    <h1>{quote.text}</h1>
                    <h3>-{quote.author}</h3>
                </div>
            )}
            <button onClick={() => {
                setQuote(q => {
                    return {...q, isLoading: true}
                })
                newQuote();
            }}>New quote</button>
        </div>
    );
}
