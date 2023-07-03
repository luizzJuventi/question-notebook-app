
import React from 'react';
import { useNavigate } from 'react-router-dom';

function QuestionCard({ questionPaper }) {
  const { id, answer } = questionPaper;
  const navigate = useNavigate();
  const questionPapers = [
    { id: 1, question: 'Question 1', answer: 'Answer question 1' },
    { id: 2, question: 'Question 2', answer: '' },
    { id: 3, question: 'Question 3', answer: 'Answer question 3' },
  ];
  const handleButtonClick = () => {
    navigate(`/question/${id}`);
  };

  return (
    <div className="question-card">
      <div className="card-content">
        <h3>Título do caderno de questões</h3>
        <p className="responded-text">{questionPapers.length} questões</p>
        <p className="responded-text">{answer ? 'Respondida' : 'Não respondida'}</p>
      </div>
      <div className="margin-top-4">
        <button
          className={`green-button ${answer ? 'disabled' : ''}`}
          disabled={answer}
          onClick={handleButtonClick}
        >
          {answer ? 'Respondido' : 'Responder'}
        </button>
      </div>
    </div>
  );
}

export default QuestionCard;
