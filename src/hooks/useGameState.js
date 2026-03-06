import { useState, useCallback } from 'react';
import { getWinner, isBoardFull, getNextPlayer } from '../utils/gameLogic';

const INITIAL_BOARD = Array(9).fill(null);

/*
 * Central game state: board, history for undo, winner.
 * Exposes actions: play, undo, reset, playAgain.
 */
export function useGameState() {
  const [board, setBoard] = useState(() => [...INITIAL_BOARD]);
  const [history, setHistory] = useState([]);

  const { winner, line } = getWinner(board);
  const nextPlayer = getNextPlayer(board);
  const isGameOver = Boolean(winner) || isBoardFull(board);

  const play = useCallback((index) => {
    if (board[index] || winner) return;
    const next = [...board];
    next[index] = nextPlayer;
    setBoard(next);
    setHistory((h) => [...h, { board: [...board], move: index }]);
  }, [board, nextPlayer, winner]);

  const undo = useCallback(() => {
    if (history.length === 0 || winner) return;
    const prev = history[history.length - 1];
    setBoard(prev.board);
    setHistory((h) => h.slice(0, -1));
  }, [history, winner]);

  const reset = useCallback(() => {
    setBoard([...INITIAL_BOARD]);
    setHistory([]);
  }, []);

  const playAgain = useCallback(() => {
    setBoard([...INITIAL_BOARD]);
    setHistory([]);
  }, []);

  return {
    board,
    history,
    winner,
    line: line ?? null,
    nextPlayer,
    isGameOver,
    play,
    undo,
    reset,
    playAgain,
  };
}
