function Cell({ value, onClick, isWinning, disabled }) {
  return (
    <button
      type="button"
      className={`cell ${value ?? ''} ${isWinning ? 'winning' : ''}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={value ? `Cell ${value}` : 'Empty cell'}
    >
      {value && <span className="cell-symbol">{value}</span>}
    </button>
  );
}

export default Cell;
