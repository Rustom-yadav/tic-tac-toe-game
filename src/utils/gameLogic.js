/**
 * Game logic for Tic-Tac-Toe: winner detection and next player.
 * Kept pure (no side effects) for testability and clarity.
 */

const LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
  [0, 4, 8], [2, 4, 6],           // diagonals
];

/**
 * Returns { winner: 'X'|'O'|null, line: number[]|null } for the given board.
 */
export function getWinner(board) {
  for (const [a, b, c] of LINES) {
    const va = board[a];
    if (va && va === board[b] && va === board[c]) {
      return { winner: va, line: [a, b, c] };
    }
  }
  return { winner: null, line: null };
}

/**
 * Returns true if every cell is filled (no nulls).
 */
export function isBoardFull(board) {
  return board.every((cell) => cell !== null);
}

/**
 * Returns 'X' | 'O' for the next player given current board (by counting moves).
 */
export function getNextPlayer(board) {
  const count = board.filter(Boolean).length;
  return count % 2 === 0 ? 'X' : 'O';
}
