import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from './App';
import QuestionScreen from './screens/QuestionScreen';
import ThankYouScreen from './screens/ThankYouScreens';

function MainRoutes() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/question/:id" element={<QuestionScreen />} />
        <Route path="/thank-you" element={<ThankYouScreen />} />
      </Routes>
    </div>
  );
}

export default MainRoutes;
