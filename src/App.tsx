import React from 'react';
import Whiteboard from './Whiteboard';
import ThemeToggle from './ThemeToggle';
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="container text-center mt-5">
        <h1>Welcome to WhiteBoard !</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>Collaborate in real-time!</p>
      </header>
      <ThemeToggle />
      <Whiteboard />
    </div>
  );
};

export default App;
