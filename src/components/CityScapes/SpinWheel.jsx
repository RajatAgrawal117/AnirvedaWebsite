import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import confetti from "canvas-confetti";

const SpinWheel = () => {
  const data = [
    { option: "Game 1", description: "Description" },
    { option: "Game 2", description: "Description" },
    { option: "Game 3", description: "Description" },
    { option: "Game 4", description: "Description" },
    { option: "Game 5", description: "Description" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);
  const [gameDescription, setGameDescription] = useState("");

  const handleSpinClick = () => {
    const randomPrize = Math.floor(Math.random() * data.length);
    setPrizeNumber(randomPrize);
    setMustSpin(true);
  };

  const handleSpinComplete = () => {
    const game = data[prizeNumber];
    setSelectedGame(game.option);
    setGameDescription(game.description);
    runConfetti();
  };

  const runConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.5 },
    });
  };

  return (
    <div className="font-Bebas text-white text-center">
      <h1 className="text-5xl font-bold text-shadow mb-6 animate-pulse">Spin the Wheel!</h1>

      <div className="relative flex flex-col items-center">
        
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data.map((game) => ({ option: game.option }))}
          backgroundColors={["#FF4500", "#32CD32", "#8A2BE2", "#FF6347", "#40E0D0", "#FFD700"]}
          textColors={["#FFFFFF"]}
          onStopSpinning={() => {
            setMustSpin(false);
            handleSpinComplete();
          }}
          outerBorderColor="#FFD700"
          outerBorderWidth={5}
          innerRadius={30}
          spinDuration={0.7}
        />
        <button
          className="mt-6 px-8 py-4 bg-red-400 text-white font-semibold rounded-xl hover:bg-secondary transform transition duration-300 ease-in-out active:scale-95 shadow-lg"
          onClick={handleSpinClick}
          disabled={mustSpin}
        >
          {mustSpin ? "Spinning..." : "Spin Now"}
        </button>
      </div>

      {/* Popup */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-secondary -600 p-6 rounded-3xl shadow-xl max-w-sm text-center">
            <h2 className="text-3xl font-bold mb-4">Congratulations!</h2>
            <p className="text-lg mb-4">
              You got{" "}
              <span className="text-yellow-400 font-extrabold">{selectedGame}</span>!
            </p>
            <p className="text-white mb-6">{gameDescription}</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition-all duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setSelectedGame(null)}
              >
                Spin Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpinWheel;
