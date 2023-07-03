import React from 'react';


const thankYouScreenStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
};

const contentContainerStyles = {
  textAlign: 'left',
};

const questionStyles = {
  fontFamily: 'Inter',
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '15px',
  letterSpacing: '0em',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const ThankYouScreen = ({ timer }) => {


  // Replace these dummy answers with your actual logic to retrieve the submitted answers
  const submittedAnswers = [
    { id: 1, title: 'Título da primeira perguntasasa lorem inpsum teste sasqwqwqqsqs', answer: 'Resposta da primeira pergunta' },
    { id: 2, title: 'Segunda pergunta teste', answer: 'Resposta da segunda pergunta' },
    { id: 3, title: 'Título da terceira pergunta', answer: 'Resposta da terceira pergunta' },
  ];

  const totalTimer = timer + (submittedAnswers.length - 1);

  return (
    <div className="thank-you-screen" style={thankYouScreenStyles}>
      <div style={contentContainerStyles}>
        <h1 style={{ fontFamily: 'Inter', fontSize: '21px', fontWeight: 700, lineHeight: '25px', letterSpacing: '0em' }}>
          Obrigado por enviar!
        </h1>
        <p>Tempo total: {totalTimer} segundos</p>
        {submittedAnswers.map((answer) => (
          <div key={answer.id}>
            <hr style={{ width: '100%', border: 'none', height: '1px', backgroundColor: '#e1e1e1', marginTop: '2rem', marginBottom: '2rem' }} />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
              <h3 style={questionStyles}>{answer.title}</h3>
              <p>{answer.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThankYouScreen;
