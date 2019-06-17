import React from 'react';
import './App.css';

function ErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  return (
    <div className="ErrorMessage">
      <h3>Server Error</h3>
      <p>There has been an error while fetching medal data from the server --- please check your Internet connection and try again later.</p>
    </div>
  );
}

export default ErrorMessage;
