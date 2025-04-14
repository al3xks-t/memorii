import React from 'react';
import { useNavigate } from 'react-router-dom';

const GreetingScreen = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/mode');
  };

  return (
    <div className="screen greeting">
      <h1>📸 Welcome to Memorii!</h1>
      <p>Your favorite Korean-style photobooth experience starts here!</p>
      <button onClick={handleStart}>Start!</button>
    </div>
  );
};

export default GreetingScreen;
