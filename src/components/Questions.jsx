import React from 'react';

function Questions() {

  const questionsBoard = [
    {
      question: 'Which hook is used to manage state in a functional component?',
      options: ['useProps', 'useEffect', 'useState', 'useRef'],
      answer: 'useState',
    },
    {
      question: 'What is the purpose of JSX in React?',
      options: [
        'To compile JavaScript to CSS',
        'To manage browser routing',
        'To write HTML inside JavaScript',
        'To write SQL queries'
      ],
      answer: 'To write HTML inside JavaScript',
    },
    {
      question: 'What is the virtual DOM in React?',
      options: [
        'The actual browser DOM',
        'A lightweight copy of the real DOM ', 
        'A JSON structure of the app', 
        'A styling method'],
      answer: 'A lightweight copy of the real DOM ',
    }
  ]

  const defaultChoices = [null, null, null];
  const [userChoices, setUserChoices] = React.useState(defaultChoices); 
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [finishGame, setFinishGame] = React.useState(false);
  const isUserSelected = userChoices[currentQuestion];
  const finishQuestions = currentQuestion === questionsBoard.length -1;

  function nextQuestion() {
    if(finishQuestions) {
      setFinishGame(prevFinishGame => !prevFinishGame);
    } else {
      setCurrentQuestion(nextQuestion => nextQuestion + 1);
    }
  }


  function getOptions(option) {
    const newUserChoices = [...userChoices];
    newUserChoices[currentQuestion] = option; 
    setUserChoices(newUserChoices); 
  }


  return (
    <main>
      <h1 className="title">Question {currentQuestion + 1}</h1>
      <p className="question">{questionsBoard[currentQuestion].question}</p>

      <div className="wrapper-options">
        {questionsBoard[currentQuestion].options.map((option, index) => (
          <button 
            key={index} 
            className={'option-btn' + (isUserSelected === option ? ' selected' : '')}
            onClick={() => getOptions(option)}
          >
            {option}
          </button>
        ))}
     </div>

      <div className="wrapper-buttons">
        <button 
          className="btn btn-previous" 
          onClick={() => setCurrentQuestion(prevQuestion => prevQuestion - 1)} 
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <button 
          className="btn" 
          onClick={nextQuestion} 
          disabled={!isUserSelected}>
          {finishQuestions ? 'Finish Quiz' : 'Next'}
        </button>
        
      </div>
    </main>
  )
}

export default Questions;