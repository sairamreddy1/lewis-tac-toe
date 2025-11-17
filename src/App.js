import { useState } from "react";

/* ------------------------- Square Component ------------------------- */
function Square({ value, onSquareClick, highlight }) {
  return (
    <button
      className="square"
      onClick={onSquareClick}
      style={{
        backgroundColor: highlight ? "#90ee90" : "white",
        fontWeight: highlight ? "bold" : "normal",
      }}
    >
      {value}
    </button>
  );
}

/* ------------------------- Board Component -------------------------- */
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    const result = calculateWinner(squares);

    if (result?.winner || squares[i]) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const result = calculateWinner(squares);
  const winner = result?.winner;
  const winningLine = result?.line || [];

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>

      <div className="board">
        {squares.map((value, i) => (
          <Square
            key={i}
            value={value}
            onSquareClick={() => handleClick(i)}
            highlight={winningLine.includes(i)}
          />
        ))}
      </div>
    </>
  );
}

/* --------------------------- Game Component ------------------------- */
export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  function restartGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  const moves = history.map((squares, move) => {
    const description = move ? `Go to move #${move}` : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <h1>Lewis-Tac-Azure by Sai Ram Reddy</h1>

      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          squares={currentSquares}
          onPlay={handlePlay}
        />
      </div>

      <div className="game-info">
        <button onClick={restartGame}>Restart Game</button>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

/* -------------------------- Winner Function ------------------------- */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}
