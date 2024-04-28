function Options({ question, dispatch, answer }) {
  const correctOption = question.correctOption;
  const hasAnswered = answer !== null; //but when we write like this, won't it be always true after the first answer? yes, it will be always true after the first answer. So we need to change this.

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered && (index === correctOption ? "correct" : "wrong")
          }`}
          key={option}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
