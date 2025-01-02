import React, { useState } from 'react';
import GameBoard from './components/GameBoard';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import WelcomeTutorial from './components/WelcomeTutorial';
import BackgroundMusic from './components/BackgroundMusic';

export default function App() {
  const [showTutorial, setShowTutorial] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a2236] to-[#0f172a] text-white">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1544999185-f4f9f5b9dfac')] bg-cover opacity-5" />
      
      <div className="relative">
        <Navbar score={score} />
        <BackgroundMusic />
        
        {showTutorial && (
          <Modal onClose={() => setShowTutorial(false)}>
            <WelcomeTutorial onClose={() => setShowTutorial(false)} />
          </Modal>
        )}

        <GameBoard onScoreUpdate={setScore} />
      </div>
    </div>
  );
}