import NextButton from "./NextButton";

function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  const percentage = (points / maxPossiblePoints) * 100;
  const halfPoint = maxPossiblePoints / 2;

  let emoji;
  if (points === maxPossiblePoints) emoji = "🧠";
  if (points >= (maxPossiblePoints * 3) / 4 && points < maxPossiblePoints)
    emoji = "🎖️";
  if (points < (maxPossiblePoints * 3) / 4 && points >= halfPoint) emoji = "👍";
  if (points < halfPoint) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span> You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">(Highscore: {highscore} points)</p>
      <NextButton dispatch={dispatch} />
    </>
  );
}

export default FinishScreen;
