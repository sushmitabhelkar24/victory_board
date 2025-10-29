import React, { useEffect, useState } from "react";
import Football from "./images/football.jpg";
import Score from "./components/Score";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [scoreR, setScoreR] = useState(0);
  const [scoreM, setScoreM] = useState(0);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const MAX_SCORE = 10;
    if (scoreM < MAX_SCORE && scoreR < MAX_SCORE) {
      return;
    }
    if (scoreR === MAX_SCORE) {
      setWinner("Team R");
      toast.success("Team Ronaldo wins");
    }
    if (scoreM === MAX_SCORE) {
      setWinner("Team M");
      toast.success("Team Messi wins");
    }
  }, [scoreR, scoreM]);

  return (
    <>
      <div
        className="h-screen w-full bg-no-repeat bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${Football})` }}
      >
        <div className="w-1/2 h-[630px] md:h-[450px] mx-auto  bg-gray-400 border-black border-12 border-dotted">
          <h1 className=" text-2xl md:text-4xl bg-blue-300 text-center py-4 ">
            🏀🏆Victory Board🏆🏀
          </h1>
          <div className="flex flex-col w-auto md:flex-row justify-around">
            <Score
              teamName="Team Ronaldo"
              score={scoreR}
              addBtn={() => {
                setScoreR(scoreR + 1);
              }}
              minusBtn={() => {
                setScoreR(scoreR - 1);
              }}
              color="text-red-800"
              isWinner={winner === "Team R"}
              isWin={winner}
            />
            <Score
              teamName="Team Messi"
              score={scoreM}
              addBtn={() => {
                setScoreM(scoreM + 1);
              }}
              minusBtn={() => {
                setScoreM(scoreM - 1);
              }}
              color="text-blue-800"
              isWinner={winner === "Team M"}
              isWin={winner}
            />
          </div>

          {winner ? (
            <p className="text-center text-[14px]mt-0">
              YEAH....<b>{winner} wins🏆🏆...</b> To play again click on
              Replay..
            </p>
          ) : null}

          <button
            className="bg-green-600 h-9 w-20 md:h-10 md:w-30 rounded-2xl border-2 border-black border-dashed block mx-auto text-[16px] md:text-2xl px-2 text-white font-bold"
            onClick={() => {
              setScoreR(0);
              setScoreM(0);
              setWinner(null)
            }}
          >
            Replay
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
