
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainRoutes from './MainRoutes';
import Header from './screens/components/Header';

ReactDOM.render(
  <Router>
    <Header title="Estudologia" />
    <MainRoutes />
  </Router>,
  document.getElementById('root')
);
