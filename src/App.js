import React, { useState } from 'react';
import 'typeface-inter';
import QuestionCard from './screens/components/QuestionCard';

import './styles.css';

const questionPapers = [
  { id: 1, question: 'Question 1', answer: 'Answer question 1' },
  { id: 2, question: 'Question 2', answer: '' },
  { id: 3, question: 'Question 3', answer: 'Answer question 3' },
];

function App() {
  const [unansweredOnly, setUnansweredOnly] = useState(false);

  const handleCheckboxChange = () => {
    setUnansweredOnly(!unansweredOnly);
  };

  const filteredQuestionPapers = unansweredOnly
    ? questionPapers.filter((questionPaper) => !questionPaper.answer)
    : questionPapers;

  const displayedQuestionPapers = filteredQuestionPapers.slice(0, 3);

  return (
    <div className="app-container">
      <div className="checkbox-container" style={{ marginTop: '24px' }}>
        <label>
          <input
            type="checkbox"
            checked={unansweredOnly}
            onChange={handleCheckboxChange}
          />
          {" Mostrar apenas questões não respondidas"}
        </label>
      </div>

      <div className="row-container">
        {displayedQuestionPapers.map((questionPaper, index) => (
          <QuestionCard
            key={questionPaper.id}
            questionPaper={questionPaper}
            isFirstCard={index === 0}
            isLastCard={index === displayedQuestionPapers.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
