const GameElements = () => {
  return (
    <>

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
        className="absolute bottom-32 left-32 w-6 h-6 hover:scale-125 transition-transform animate-bounce"
        style={{ animationDelay: '0.5s' }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center">
          <span className="text-yellow-800 text-xs font-bold">$</span>
        </div>
      </div>

      <div 
        className="absolute top-96 right-32 w-6 h-6 hover:scale-125 transition-transform animate-bounce"
        style={{ animationDelay: '2s' }}
      >
        <div className="w-full h-full bg-yellow-400 rounded-full border-2 border-yellow-600 flex items-center justify-center">
          <span className="text-yellow-800 text-xs font-bold">$</span>
        </div>
      </div>

      {/* Sonic Rings */}
      <div 
        className="absolute bottom-64 right-20 w-8 h-8 hover:scale-125 transition-transform animate-pulse"
        style={{ animationDelay: '1.5s' }}
      >
        <div className="w-full h-full border-4 border-blue-400 rounded-full relative">
          <div className="absolute inset-2 border-2 border-blue-600 rounded-full"></div>
        </div>
      </div>

      <div 
        className="absolute top-48 left-64 w-8 h-8 hover:scale-125 transition-transform animate-pulse"
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