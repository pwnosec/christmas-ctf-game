import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current) {
        try {
          // Set volume to 50%
          audioRef.current.volume = 0.5;
          await audioRef.current.play();
        } catch (error) {
          console.log("Autoplay failed, waiting for user interaction", error);
          
          // Add click event listener to document to enable audio on first interaction
          const enableAudio = () => {
            if (audioRef.current) {
              audioRef.current.play();
              document.removeEventListener('click', enableAudio);
            }
          };
          document.addEventListener('click', enableAudio);
        }
      }
    };

    playAudio();

    return () => {
      document.removeEventListener('click', () => {});
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleMute}
        className="bg-gray-900/80 hover:bg-gray-800 text-white p-3 rounded-full backdrop-blur-sm border border-gray-700 shadow-lg transition-all duration-300 hover:scale-105"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6" />
        ) : (
          <Volume2 className="w-6 h-6" />
        )}
      </button>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        playsInline
        src="https://www.dropbox.com/scl/fi/6c020eid387494twd6639/Akon-Lonely.mp3?rlkey=dh49xsqwcww8p9zxbbclnebmx&dl=1"
      >
        <source 
          src="https://www.dropbox.com/scl/fi/6c020eid387494twd6639/Akon-Lonely.mp3?rlkey=dh49xsqwcww8p9zxbbclnebmx&dl=1" 
          type="audio/mpeg"
        />
      </audio>
    </div>
  );
}