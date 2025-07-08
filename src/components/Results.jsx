function Results({userChoices, questionsBoard, restartQuiz}) {

  function getScore() {
    let finalScore = 0;
    userChoices.forEach((score, index) => {
      if(questionsBoard[index].answer === score) {
        finalScore++;
      }
    })

    return finalScore;
  }
  const score = getScore();

  return(
    <div className="results-wrapper">
      <h2>Quiz completed!</h2>
      <p className="score">Your score: {score}/{questionsBoard.length}</p>
      <button className="btn-restart-quiz" onClick={restartQuiz}>Restart Quiz</button>
    </div>
  )
}

export default Results;

