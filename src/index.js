import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import './index.css';
import App from './App';
import Footer from './components/Footer';

ReactDOM.render(
    <BrowserRouter>
    <App />
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

