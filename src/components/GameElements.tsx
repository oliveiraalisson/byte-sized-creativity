import { useState } from "react";

const GameElements = () => {
  const [coins, setCoins] = useState(0);
  const [rings, setRings] = useState(0);
  const [collectedItems, setCollectedItems] = useState<string[]>([]);

  const collectCoin = (id: string) => {
    if (collectedItems.includes(id)) return;
    
    setCoins(prev => prev + 1);
    setCollectedItems(prev => [...prev, id]);
    
    // Add visual feedback
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('animate-collect');
      setTimeout(() => {
        element.style.visibility = 'hidden';
        setTimeout(() => {
          element.style.visibility = 'visible';
          element.classList.remove('animate-collect');
          setCollectedItems(prev => prev.filter(item => item !== id));
        }, 3000);
      }, 600);
    }
  };

  const collectRing = (id: string) => {
    if (collectedItems.includes(id)) return;
    
    setRings(prev => prev + 1);
    setCollectedItems(prev => [...prev, id]);
    
    // Add visual feedback
    const element = document.getElementById(id);
    if (element) {
      element.classList.add('animate-collect');
      setTimeout(() => {
        element.style.visibility = 'hidden';
        setTimeout(() => {
          element.style.visibility = 'visible';
          element.classList.remove('animate-collect');
          setCollectedItems(prev => prev.filter(item => item !== id));
        }, 3000);
      }, 600);
    }
  };

  return (
    <>
      {/* Fixed Counter Display */}
      <div className="fixed top-4 right-4 z-50 flex gap-4 font-mono text-sm">
        <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-yellow-400">
          <span className="text-yellow-400">🪙 {coins}</span>
        </div>
        <div className="bg-background/80 backdrop-blur-sm px-3 py-1 rounded border border-blue-400">
          <span className="text-blue-400">💍 {rings}</span>
        </div>
      </div>

      {/* Mario Mushroom */}
      <div 
        className="absolute top-32 left-10 w-8 h-8 cursor-pointer hover:scale-110 transition-transform animate-float"
        style={{ animationDelay: '0s' }}
      >
        <div className="w-full h-full bg-red-500 rounded-t-full relative">
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-3 bg-yellow-100 rounded-b"></div>
        </div>
      </div>

      {/* Kirby Star */}
      <div 
        className="absolute top-64 right-16 w-6 h-6 cursor-pointer hover:rotate-45 transition-transform animate-float"
        style={{ animationDelay: '1s' }}
      >
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-yellow-400 transform rotate-45"></div>
          <div className="absolute inset-1 bg-white transform rotate-45"></div>
          <div className="absolute inset-2 bg-yellow-400 transform rotate-45"></div>
        </div>
      </div>

      {/* Mario Coins */}
      <div 
        id="coin1"
        onClick={() => collectCoin("coin1")}
        className="absolute bottom-32 left-32 w-6 h-6 cursor-pointer hover:scale-125 transition-transform animate-bounce"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center">
          <span className="text-yellow-800 text-xs font-bold">$</span>
        </div>
      </div>

      <div 
        id="coin2"
        onClick={() => collectCoin("coin2")}
        className="absolute top-96 right-32 w-6 h-6 cursor-pointer hover:scale-125 transition-transform animate-bounce"
        style={{ animationDelay: '2s' }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center">
          <span className="text-yellow-800 text-xs font-bold">$</span>
        </div>
      </div>

      {/* Sonic Rings */}
      <div 
        id="ring1"
        onClick={() => collectRing("ring1")}
        className="absolute bottom-64 right-20 w-8 h-8 cursor-pointer hover:scale-125 transition-transform animate-pulse"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-full h-full border-4 border-blue-400 rounded-full relative">
          <div className="absolute inset-2 border-2 border-blue-600 rounded-full"></div>
        </div>
      </div>

      <div 
        id="ring2"
        onClick={() => collectRing("ring2")}
        className="absolute top-48 left-64 w-8 h-8 cursor-pointer hover:scale-125 transition-transform animate-pulse"
        style={{ animationDelay: '0.8s' }}
      >
        <div className="w-full h-full border-4 border-blue-400 rounded-full relative">
          <div className="absolute inset-2 border-2 border-blue-600 rounded-full"></div>
        </div>
      </div>

      {/* Question Block */}
      <div 
        className="absolute bottom-48 left-16 w-8 h-8 cursor-pointer hover:scale-110 transition-transform animate-bounce"
        style={{ animationDelay: '2.5s' }}
      >
        <div className="w-full h-full bg-yellow-500 border-2 border-yellow-700 flex items-center justify-center">
          <span className="text-yellow-900 text-lg font-bold">?</span>
        </div>
      </div>

      {/* Power Pellet */}
      <div 
        className="absolute top-80 right-48 w-4 h-4 cursor-pointer hover:scale-150 transition-transform animate-pulse"
        style={{ animationDelay: '3s' }}
      >
        <div className="w-full h-full bg-white rounded-full animate-ping"></div>
      </div>
    </>
  );
};

export default GameElements;