import React, { useState } from 'react';

import Board from "./board"
import { getWinner } from './helper';

const styles = {
    width: '200px',
    margin: '20px auto',
};

const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true);
    const winner = getWinner(board);
    const squareClick = (i) => {
        const boardCopy = [...board];
        // To return If user click an occupied square or if game is won
        if (winner || boardCopy[i]) return;

        boardCopy[i] = xIsNext ? 'X' : 'O';
        setBoard(boardCopy);
        setXisNext(!xIsNext);
    }

    const resetButton = () => (
        <button onClick={() => setBoard(Array(9).fill(null))}>Restart Game</button>
    )
    return (
        <div style={styles}>
            <Board squares={board} onClick={squareClick} />
            <br></br>
            <div> {resetButton()}</div>

        </div>

    )

}


export default Game