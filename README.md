# Tic Tac Toe

A clean, responsive **two-player** Tic Tac Toe game built with React and Vite. Includes undo, win highlighting, and a simple, accessible UI.

**[Live Demo](https://your-username.github.io/tic-tac-toe-game)** · **[Repository](https://github.com/Rustom-yadav/tic-tac-toe-game)**


## Features

- **Two players** — X and O take turns on the same device
- **Undo** — Roll back the last move (disabled after a win)
- **Win highlight** — Winning row, column, or diagonal is highlighted
- **Play again / Restart** — Start a fresh game anytime
- **Responsive** — Works on mobile and desktop
- **Accessible** — ARIA labels, keyboard-friendly focus, reduced-motion support
- **Dark mode** — Follows system preference (`prefers-color-scheme`)

---

## Tech Stack

- **React 19** — UI components
- **Vite 7** — Dev server and build
- **Plain CSS** — Layout, theming, and animations (no UI library)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install & Run

```bash
# Install dependencies
npm install

# Start development server (with HMR)
npm run dev
```

Then open **http://localhost:5173** (or the port shown in the terminal).

### Build for Production

```bash
npm run build
```

Output is in the `dist/` folder. To preview the production build:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

---

## Project Structure

```
src/
├── components/
│   ├── Game.jsx      # Main game container, status, actions
│   ├── Board.jsx    # 3×3 grid of cells
│   └── Cell.jsx     # Single cell (X/O button)
├── hooks/
│   └── useGameState.js   # Board state, history, undo, winner
├── utils/
│   └── gameLogic.js      # getWinner, isBoardFull, getNextPlayer
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

- **Game logic** is in pure functions (`gameLogic.js`) — easy to test.
- **State** is centralized in `useGameState`; components stay presentational.

---

## License

MIT
