import React from 'react';
import { Terminal, Star, Gift } from 'lucide-react';

interface NavbarProps {
  score: number;
}

export default function Navbar({ score }: NavbarProps) {
  return (
    <nav className="bg-gray-900/50 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Terminal className="w-8 h-8 text-red-500" />
              <Gift className="w-4 h-4 text-green-500 absolute -top-1 -right-1 animate-bounce" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
                PwnOsec Happy Christmas
              </h1>
              <p className="text-xs text-gray-400">Secure the North Pole</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 bg-gray-800/50 px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-400" />
              <span className="text-lg font-bold text-white">{score}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}