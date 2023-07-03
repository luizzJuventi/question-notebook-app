import React, { useState, useRef, useEffect, useMemo } from 'react';
import ThankYouScreen from './ThankYouScreens';

function QuestionScreen() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);

  const questions = useMemo(
    () => [
      {
        id: 1,
        title: 'Primeira pergunta teste sasqwqwqqsqs',
        text: 'Texto da primeira pergunta',
      },
      {
        id: 2,
        title: 'Segunda pergunta teste',
        text: 'Texto da segunda pergunta',
      },
      {
        id: 3,
        title: 'Título da terceira pergunta',
        text: 'Texto da terceira pergunta',
      },
    ],
    []
  );

  const [timer, setTimer] = useState(0);
  const [totalTimer, setTotalTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (currentQuestionIndex < questions.length - 1) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [currentQuestionIndex, questions]);

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setTimer(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTimer(0);
      setInputValue(''); // Reset the input value
      if (inputRef.current) {
        inputRef.current.value = ''; // Reset the input field
      }
    } else {
      setFormSubmitted(true);
      console.log(formSubmitted)
      setTotalTimer(timer + (questions.length - 1)); // Calculate the total timer
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const currentQuestion = questions[currentQuestionIndex];

  // Check if the last question is submitted and render the ThankYouScreen
  if (currentQuestionIndex === questions.length - 1) {
    return <ThankYouScreen timer={totalTimer} />;
  }

  return (
    <div className="question-screen">
      <div className="content-container">
        <h3>Título do caderno de questões</h3>
        <p>{currentQuestion.title}</p>
        <div className="blank-container">
          <input
            type="text"
            className="user-input"
            placeholder="Responda aqui"
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="green-button"
            style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, lineHeight: '15px', letterSpacing: '0em', textAlign: 'center' }}
          >
            Enviar Resposta
          </button>
        </div>
        <p>Tempo decorrido: {timer} segundos</p>
        <p>Quantidade de caracteres: {inputValue.length}</p> {/* Character counter */}
        <hr />
        <div className="button-container">
          <button
            id="previousButton"
            className={`green-button ${currentQuestionIndex === 0 ? 'disabled' : ''}`}
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, lineHeight: '15px', letterSpacing: '0em', textAlign: 'center', width: '178px' }}
          >
            Pergunta Anterior
          </button>
          <button
            className={`green-button`}
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
            style={{ fontFamily: 'Inter', fontSize: '12px', fontWeight: 400, lineHeight: '15px', letterSpacing: '0em', textAlign: 'center', width: '178px' }}
          >
            {currentQuestionIndex === 1 ? 'Finalizar e Enviar' : 'Próxima Pergunta'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionScreen;
