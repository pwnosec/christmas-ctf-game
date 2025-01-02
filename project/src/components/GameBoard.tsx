import React, { useState } from 'react';
import ChallengeCard from './ChallengeCard';
import ChallengeModal from './ChallengeModal';
import { challenges } from '../data/challenges';

interface GameBoardProps {
  onScoreUpdate: (score: number) => void;
}

export default function GameBoard({ onScoreUpdate }: GameBoardProps) {
  const [completedChallenges, setCompletedChallenges] = useState<number[]>([]);
  const [selectedChallenge, setSelectedChallenge] = useState<typeof challenges[0] | null>(null);

  const handleChallengeClick = (challenge: typeof challenges[0]) => {
    setSelectedChallenge(challenge);
  };

  const handleChallengeComplete = (challenge: typeof challenges[0]) => {
    if (!completedChallenges.includes(challenge.id)) {
      setCompletedChallenges([...completedChallenges, challenge.id]);
      onScoreUpdate((prevScore) => prevScore + challenge.points);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge.id}
            {...challenge}
            isCompleted={completedChallenges.includes(challenge.id)}
            onClick={() => handleChallengeClick(challenge)}
          />
        ))}
      </div>

      {selectedChallenge && (
        <ChallengeModal
          challenge={selectedChallenge}
          onClose={() => setSelectedChallenge(null)}
          onComplete={() => handleChallengeComplete(selectedChallenge)}
        />
      )}
    </div>
  );
}