import React, { useState } from 'react';
import { flags } from '../data/flags';
import { X } from 'lucide-react';

interface ChallengeModalProps {
  challenge: {
    id: number;
    title: string;
    description: string;
    difficulty: string;
    points: number;
    category: string;
    challenge: string;
    hint: string;
  };
  onClose: () => void;
  onComplete: () => void;
}

export default function ChallengeModal({ challenge, onClose, onComplete }: ChallengeModalProps) {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const flagKey = challenge.title.toLowerCase().replace(/['s\s]/g, '');
    const correctFlag = flags[flagKey as keyof typeof flags];
    
    if (answer.trim() === correctFlag) {
      onComplete();
      onClose();
    } else {
      setError('Incorrect flag! Try again.');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-700">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-white mb-2">{challenge.title}</h2>
              <div className="flex gap-3">
                <span className="px-3 py-1 rounded-full text-sm bg-blue-900/50 text-blue-300 border border-blue-700">
                  {challenge.category}
                </span>
                <span className="px-3 py-1 rounded-full text-sm bg-yellow-900/50 text-yellow-300 border border-yellow-700">
                  {challenge.points} pts
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Description</h3>
            <p className="text-gray-300">{challenge.description}</p>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-2">Challenge</h3>
            <pre className="bg-gray-800/50 p-4 rounded-lg text-gray-300 whitespace-pre-wrap">
              {challenge.challenge}
            </pre>
          </div>

          <div className="mb-6">
            <button
              onClick={() => setShowHint(!showHint)}
              className="text-yellow-500 hover:text-yellow-400 text-sm font-medium"
            >
              {showHint ? 'Hide Hint' : 'Show Hint'}
            </button>
            {showHint && (
              <div className="mt-2 p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                <p className="text-yellow-300 text-sm">{challenge.hint}</p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="flag" className="block text-sm font-medium text-gray-300 mb-2">
                Submit Flag
              </label>
              <input
                type="text"
                id="flag"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="XMAS{...}"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {error && (
                <p className="mt-2 text-sm text-red-400">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
            >
              Submit Solution
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}