import { useGameState } from '../hooks/useGameState';
import Board from './Board';

function Game() {
  const {
    board,
    winner,
    line,
    nextPlayer,
    isGameOver,
    play,
    undo,
    reset,
    playAgain,
  } = useGameState();

  const statusMessage = winner
    ? `${winner} wins!`
    : isGameOver
      ? "It's a draw!"
      : `Next: ${nextPlayer}`;

  return (
    <main className="game" aria-label="Tic-tac-toe game">
      <h1 className="title">Tic Tac Toe</h1>

      <p className="status" aria-live="polite">
        {statusMessage}
      </p>

      <Board
        board={board}
        winningLine={line}
        onPlay={play}
        disabled={isGameOver}
      />

      <div className="actions">
        <button
          type="button"
          className="btn btn-undo"
          onClick={undo}
          disabled={!board.some(Boolean) || !!winner}
          aria-label="Undo last move"
        >
          Undo
        </button>
        {isGameOver ? (
          <button type="button" className="btn btn-primary" onClick={playAgain}>
            Play again
          </button>
        ) : (
          <button type="button" className="btn btn-secondary" onClick={reset}>
            Restart
          </button>
        )}
      </div>
    </main>
  );
}

export default Game;
