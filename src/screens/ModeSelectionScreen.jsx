import React from 'react';
import { useNavigate } from 'react-router-dom';

const ModeSelectionScreen = () => {
  const navigate = useNavigate();

  const handleSelect = (mode) => {
    if (mode === 'original') {
      navigate('/camera');
    } else {
      navigate('/idol');
    }
  };

  return (
    <div className="screen mode-selection">
      <h2>Select a Mode</h2>
      <button onClick={() => handleSelect('original')}>Original Mode</button>
      <button onClick={() => handleSelect('idol')}>Idol Mode</button>
    </div>
  );
};

export default ModeSelectionScreen;
