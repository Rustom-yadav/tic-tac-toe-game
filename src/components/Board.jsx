import Cell from './Cell';

function Board({ board, winningLine, onPlay, disabled }) {
  return (
    <div className="board" role="grid" aria-label="Tic-tac-toe board">
      {board.map((value, index) => (
        <Cell
          key={index}
          value={value}
          isWinning={winningLine != null && winningLine.includes(index)}
          onClick={() => onPlay(index)}
          disabled={disabled}
        />
      ))}
    </div>
  );
}

export default Board;
