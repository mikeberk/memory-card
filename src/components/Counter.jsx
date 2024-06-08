export default function Counter({ currentScore, highScore, handleReset }) {
  return (
    <div className="score-bar">
      {currentScore < 10 && (
        <p>
          Can you click all the albums without picking the same album twice?
        </p>
      )}
      {currentScore === 10 && (
        <>
          <p className="win">You guessed them all correctly!</p>
          <button onClick={handleReset}>Reset</button>
        </>
      )}
      <div className="counter">
        <p>Current Score: {currentScore}</p>
        <p>High Score: {highScore}</p>
      </div>
    </div>
  );
}
