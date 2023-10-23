export default function DiceGame() {
    const player = Math.floor(Math.random() * 6) + 1;
    const comp = Math.floor(Math.random() * 6) + 1;
    const isWinner = player > comp;
    const styles = {
        color: isWinner?"green":"red",
        }
    return (
        <div>
            <h1>Dice game</h1>
            {isWinner ? <h2 style={styles}>Yohoo! You won</h2> : <h3 style={styles}>You loose :(</h3>}
            <h4>You roll: {player}</h4>
            <h4>Computer rolls: {comp}</h4>
        </div>
    );
}
