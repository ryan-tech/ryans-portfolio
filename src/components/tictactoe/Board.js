import Square from './Square';
import Result from './Result';
import { useState } from 'react';

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [isPlayerOne, setIsPlayerOne] = useState(true);
    function handleClick(i) {
        const nextSquares = squares.slice();
        if (nextSquares[i]) return;
        if (calculateWinner(squares)) {

        }
        nextSquares[i] = isPlayerOne ? "X" : "O";
        setIsPlayerOne(!isPlayerOne);
        setSquares(nextSquares);
    }
    function handleResetButton() {
        setSquares(Array(9).fill(null));
    }

    function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
        }
    }
    return null;
    }



    return(
    <>
    <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div>
    <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div>
    <button onClick={handleResetButton}>Reset</button>
    <Result winner={() => calculateWinner(squares)} />
    </>
    )
}

export default Board;