import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GreetingScreen from './screens/GreetingScreen';
import ModeSelectionScreen from './screens/ModeSelectionScreen';
// Future screens
// import IdolSelectionScreen from './screens/IdolSelectionScreen';
// import CameraScreen from './screens/CameraScreen';
// import EndScreen from './screens/EndScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GreetingScreen />} />
        <Route path="/mode" element={<ModeSelectionScreen />} />
        {/* Future routes */}
        {/* <Route path="/idol" element={<IdolSelectionScreen />} /> */}
        {/* <Route path="/camera" element={<CameraScreen />} /> */}
        {/* <Route path="/end" element={<EndScreen />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
