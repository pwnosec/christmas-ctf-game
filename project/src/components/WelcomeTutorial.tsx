import React from 'react';
import { TreePine, Lock, Shield, Gift } from 'lucide-react';

interface WelcomeTutorialProps {
  onClose: () => void;
}

export default function WelcomeTutorial({ onClose }: WelcomeTutorialProps) {
  return (
    <div className="text-center">
      <div className="relative">
        <TreePine className="w-20 h-20 mx-auto text-green-500 mb-4" />
        <div className="absolute top-0 right-1/3 animate-bounce">
          <Gift className="w-6 h-6 text-red-500" />
        </div>
      </div>
      
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-green-500 bg-clip-text text-transparent">
        Welcome Cyber Santa!
      </h2>
      
      <p className="mb-6 text-gray-300 leading-relaxed">
        The North Pole's security systems have been compromised! Help Santa secure
        his workshop by solving cybersecurity challenges and protecting Christmas!
      </p>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
          <Lock className="w-10 h-10 mx-auto text-blue-400 mb-3" />
          <h3 className="font-semibold text-gray-200">Crack Codes</h3>
          <p className="text-sm text-gray-400 mt-2">Decrypt mysterious messages</p>
        </div>
        <div className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700">
          <Shield className="w-10 h-10 mx-auto text-red-400 mb-3" />
          <h3 className="font-semibold text-gray-200">Defend Systems</h3>
          <p className="text-sm text-gray-400 mt-2">Protect against cyber threats</p>
        </div>
      </div>

      <button
        onClick={onClose}
        className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-red-500 to-green-500 
          text-white font-bold transform transition-all duration-300 hover:scale-105
          hover:shadow-xl hover:shadow-red-500/20"
      >
        Start Your Mission
      </button>
    </div>
  );
}