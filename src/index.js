import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Header from './components/Header';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="flex flex-col items-center h-auto  bg-white text-center">
    <Header />
    <App />
  </div>
);


