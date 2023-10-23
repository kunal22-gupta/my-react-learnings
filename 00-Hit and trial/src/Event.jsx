export default function Event() {
    return (
        <div className="Event">
            <h1 onMouseOver={changeColor}>Hover over me</h1>
            <button onClick={greet}>Click me</button>
        </div>
    )
}

function changeColor() {
    document.querySelector('.Event h1').style.color = "red";
}
function greet() {
    alert("Hello!!")
}