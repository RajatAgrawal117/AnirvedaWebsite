import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import confetti from "canvas-confetti";

const SpinWheel = () => {
  const data = [
    { option: "Game 1", description: "Compete and win amazing rewards!" },
    { option: "Game 2", description: "Test your skills in this challenge!" },
    { option: "Game 3", description: "Team up and dominate the battlefield!" },
    { option: "Game 4", description: "A thrilling experience awaits you!" },
    { option: "Game 5", description: "Get ready for an exciting adventure!" },
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
      particleCount: 200,
      spread: 120,
      startVelocity: 30,
      scalar: 1.2,
      origin: { x: 0.5, y: 0.5 },
    });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center font-Bebas">
      <h1 className="text-5xl font-bold text-shadow mb-8 animate-bounce text-primary">
        Spin the Wheel!
      </h1>

      <div className="relative flex flex-col items-center">
        <div className="relative mb-4 shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out">
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data.map((game) => ({ option: game.option }))}
            backgroundColors={[
              "#C9872B", // Theme primary color
              "#B69575", // Theme secondary color
              "#0F0F0F", // Theme tertiary color
              "#FFD700", // Gold
              "#FF4500", // Orange Red
            ]}
            textColors={["#FFFFFF"]}
            onStopSpinning={() => {
              setMustSpin(false);
              handleSpinComplete();
            }}
            outerBorderColor="#FFD700"
            outerBorderWidth={6}
            innerRadius={40}
            spinDuration={1}
          />
        </div>
        <button
          className="mt-6 px-8 py-4 bg-gradient-to-r from-yellow-400 to-red-400 text-black font-bold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
          onClick={handleSpinClick}
          disabled={mustSpin}
        >
          {mustSpin ? "Spinning..." : "Spin Now"}
        </button>
      </div>

      {/* Popup */}
      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-gradient-to-b from-gray-900 to-gray-700 p-8 rounded-3xl shadow-2xl text-center max-w-sm">
            <h2 className="text-4xl font-bold text-yellow-400 mb-4 animate-pulse">Congratulations!</h2>
            <p className="text-lg text-white mb-4">
              You got{" "}
              <span className="text-yellow-500 font-extrabold">{selectedGame}</span>!
            </p>
            <p className="text-white text-base italic mb-6">{gameDescription}</p>
            <div className="flex justify-center gap-4">
              <button
                className="px-6 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 hover:scale-105 transition-all duration-300 ease-in-out"
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