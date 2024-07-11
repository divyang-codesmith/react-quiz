function FinishScreen({ dispatch, points, maxPossiblePoints, highscore }) {
  const percerntage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (percerntage === 100) {
    emoji = '🥇';
  }
  if (percerntage >= 80 && percerntage < 100) {
    emoji = '🎉';
  }
  if (percerntage >= 50 && percerntage < 80) {
    emoji = '🙃';
  }
  if (percerntage >= 0 && percerntage < 50) {
    emoji = '🤨';
  }
  if (percerntage === 0) {
    emoji = '🤦‍♂️';
  }

  return (
    <>
      <p className='result'>
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{' '}
        {maxPossiblePoints} points ({percerntage}%)!
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'restart' })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
