import React from 'react';
import Results from './Results'

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
        'A styling method'
      ],
      answer: 'A lightweight copy of the real DOM ',
    },
    {
      question: 'What does the useEffect hook do?',
      options: [
        'Performs side effects in function components ',
        'Manages component styles', 
        ' Manages global state', 
        'Handles form inputs'
      ],
      answer: 'Performs side effects in function components ',
    },
    {
      question: 'In React, what is a key used for?',
      options: [
        'To style elements',
        'To encrypt props', 
        'To uniquely identify elements in a list', 
        'To name components'
      ],
      answer: 'To uniquely identify elements in a list',
    },
    {
      question: 'What is a controlled component?',
      options: [
        'A component that controls another component',
        'A component with CSS modules', 
        'A component using class syntax', 
        'A component where form data is handled by React'
      ],
      answer: 'A component where form data is handled by React',
    },
    {
      question: 'What is the default method of data flow in React?',
      options: [
        'Bidirectional',
        'Unidirectional (parent to child)', 
        'Circular', 
        'Through Redux'
      ],
      answer: 'Unidirectional (parent to child)',
    },
    {
      question: 'How do you pass data from a parent to a child component?',
      options: [
        'Using props',
        'Using Redux', 
        'Using state', 
        'Using context'
      ],
      answer: 'Using props',
    },
    {
      question: 'Which lifecycle method is replaced by useEffect in functional components?',
      options: [
        'constructor',
        'componentDidMount', 
        'getSnapshotBeforeUpdate', 
        'componentWillUnmount'
      ],
      answer: 'componentDidMount',
    },
    {
      question: 'What is the use of React.Fragment',
      options: [
        'To create a new DOM element',
        'To define a route', 
        'To group elements without adding extra nodes to the DOM', 
        'To bind event handlers'
      ],
      answer: 'To group elements without adding extra nodes to the DOM',
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

  function restartQuiz() {
    setUserChoices(defaultChoices);
    setCurrentQuestion(0);
    setFinishGame(false);
  }

  if(finishGame) {
    return (
      <Results 
        restartQuiz={restartQuiz} 
        userChoices={userChoices} 
        questionsBoard={questionsBoard}
      />
    )  
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