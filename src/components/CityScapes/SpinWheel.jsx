import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";

const SpinWheel = () => {
  const data = [
    { option: "Game 1" },
    { option: "Game 2" },
    { option: "Game 3" },
    { option: "Game 4" },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(null);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleSpinClick = () => {
    const randomPrize = Math.floor(Math.random() * data.length);
    setPrizeNumber(randomPrize);
    setMustSpin(true);
  };

  const handleSpinComplete = () => {
    setSelectedGame(data[prizeNumber].option);
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center font-Lato">
      <h1 className="text-3xl font-Bebas text-primary mb-6">Spin the Wheel!</h1>
      <div className="flex flex-col items-center">
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          backgroundColors={["#C9872B", "#B69575"]}
          textColors={["#FFFFFF"]}
          onStopSpinning={() => {
            setMustSpin(false);
            handleSpinComplete();
          }}
        />
        <button
          className="mt-6 px-6 py-3 bg-primary text-black font-bold rounded hover:bg-secondary transition"
          onClick={handleSpinClick}
          disabled={mustSpin}
        >
          {mustSpin ? "Spinning..." : "Spin Now"}
        </button>
      </div>

      {/* Popup */}
      {selectedGame && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-secondary p-6 rounded-md shadow-lg text-center w-96">
            <h2 className="text-2xl font-Bebas text-primary mb-4">Congratulations!</h2>
            <p className="text-lg text-white mb-6">
              You got <span className="text-primary font-bold">{selectedGame}</span>!
            </p>
            <div className="flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-primary text-black rounded hover:bg-secondary transition"
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