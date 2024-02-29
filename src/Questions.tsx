//create initial component
import { useState } from 'react';
import './App.css';

const questionsList = [
  {
    question: 'Qual o ano de lançamento do fecebook',
    options: ['2004', '2000', '2007'],
    correctAnswer: '2004'
  },
  {
    question: 'Qual a plataforma mas usadas nos dias de hoje?',
    options: ['whatsapp', 'instagram', 'fecebook'],
    correctAnswer: 'whatsapp'
  },
  {
    question: 'qual o dono da plataforma meta ?',
    options: ['mark zuckerberg', 'Elon musk', 'evan williams'],
    correctAnswer: 'mark zuckerberg'
  },
  {
    question: 'Qual a posição do Brasil  no ranking doa países que mais consomem redes sociais no munndo?',
    options: ['3', '5', '10'],
    correctAnswer: '3'
  },
  {
    question: 'em que ano surgiu o primeiro iphone?',
    options: ['2007', '2005', '2003'],
    correctAnswer: '2007'
  },
  {
    question: 'quem inventou a primeira inteligência artificial ?',
    options: ['Sam Altman ', 'Alan turing', 'Nathan Rochester'],
    correctAnswer: 'Nathan Rochester'
  },
  {
    question: 'Qual o tempo médio que o brasileiro passa conectado por dia?',
    options: ['9h', '5h', '12h'],
    correctAnswer: '9h'
  },
  {
    question: 'em que ano que foram introduzida as cores na imagem na tv no Brasil?',
    options: ['1972', '1954', '1960'],
    correctAnswer: '1954'
  },
]
function Questions() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [score, setScore] = useState(0)


  const handleOptionClick = (option: string) => {
    setSelectedOption(option)
  }

  const handleNextButtonClick = () => {
    if (selectedOption === questionsList[currentQuestion].correctAnswer) {
      setScore(score + 1)
    }
    setSelectedOption('')
    setCurrentQuestion(currentQuestion + 1)
  }

  if (currentQuestion >= questionsList.length) {
    return (
      <div>
        <h1>Parabéns! Você acertou {score} de {questionsList.length} perguntas</h1>
        <button className='Try-again' onClick={() => {
          setCurrentQuestion(0)
          setScore(0)

        }}>Tentar novamente</button>
      </div>
    )
  }

  const question = questionsList[currentQuestion]

  const isCorrect = selectedOption === questionsList[currentQuestion].correctAnswer


  return (
    <div className="Questions-container">
      <h3>{question.question}</h3>
      <div className='Answers-container'>
        {question.options.map((option, index) => (
          <button
            key={option}
            onClick={() => handleOptionClick(option)}
            disabled={!!selectedOption}
            className={`Answer-option  ${isCorrect && option === selectedOption && 'Right-answer'} ${!isCorrect && option === selectedOption && 'Wrong-answer'}`}
          >
            {index + 1}- {option}
          </button>
        ))}
      </div>
      <button onClick={handleNextButtonClick} disabled={!selectedOption}>Próxima</button>
    </div >
  );
}

export default Questions
