import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import './components/globalStyle/Main.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

function fakeComment(id) {
  setInterval(() => {
    // Tạo custom event
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, {
        detail: `Comment của lesson ${id}`
      })
    )
  }, 2000)
}

fakeComment(1);
fakeComment(2);
fakeComment(3);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // use router
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
