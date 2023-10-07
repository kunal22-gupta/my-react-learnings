import { useState } from "react";
import "./ColorBox.css";
 
export default function ColorBox({ colors }) {
    const randColor = () => colors[Math.floor(Math.random() * colors.length)];
    /*
        In this, this randColor function is executed everytime
        when we re-render the page. But the value is initialized only
        once. Rest of the time it is ignored. 
            const [box2Color, setBox2Color] = useState(randColor());
            const [box1Color, setBox1Color] = useState(randColor());
            Therefore, to run the function only once we must
            follow the below syntax.
            */
   const [box2Color, setBox2Color] = useState(randColor);
   const [box1Color, setBox1Color] = useState(randColor);
    const changeColor = async (e) => {
        console.log(e.target.parentElement);
        setBox2Color(randColor());
        setBox1Color(randColor());
        e.target.classList.toggle("rotated");
        e.target.nextElementSibling
            ? e.target.nextElementSibling.classList.toggle("rotated")
            : e.target.previousElementSibling.classList.toggle("rotated");
    };
    return (
        <div className="ColorBox">
            <div
                className="box box1"
                style={{ backgroundColor: box1Color }}
                onClick={changeColor}
            >1</div>
            <div
                className="box box2 rotated"
                style={{ backgroundColor: box2Color }}
                onClick={changeColor}
            >2</div>
        </div>
    );
}