import React from 'react';
import { LucideIcon } from 'lucide-react';
import { getDifficultyStyle } from '../utils/styles';

interface ChallengeCardProps {
  id: number;
  title: string;
  icon: LucideIcon;
  difficulty: string;
  points: number;
  category: string;
  isCompleted: boolean;
  onClick: () => void;
}

export default function ChallengeCard({
  title,
  icon: Icon,
  difficulty,
  points,
  category,
  isCompleted,
  onClick,
}: ChallengeCardProps) {
  return (
    <div
      className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-300 
        hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 cursor-pointer border border-gray-700
        ${isCompleted ? 'opacity-50' : ''}`}
      onClick={onClick}
    >
      <div className="relative">
        <div className="absolute -top-10 -right-6">
          <div className="text-4xl font-bold text-blue-500/10">#{points}</div>
        </div>
        <Icon className="w-12 h-12 text-blue-400 mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <div className="flex justify-between items-center mb-3">
          <span className="text-sm text-gray-400">{category}</span>
          <span className="text-sm font-semibold text-yellow-400">{points} pts</span>
        </div>
        <div className="flex items-center">
          <span className={getDifficultyStyle(difficulty)}>
            {difficulty}
          </span>
        </div>
      </div>
    </div>
  );
}