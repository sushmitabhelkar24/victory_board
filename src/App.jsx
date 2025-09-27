import React, { useState } from "react";
import Football from "./images/football.jpg";

function App() {

  const [scoreR,setScoreR] = useState(0);
  const [scoreM,setScoreM] = useState(0);

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
            <div className="h-50 w-65 md:h-60 bg-red-300 md:w-100 my-6 mx-4">
              <h2 className="text-center text-xl md:text-3xl font-bold py-2 text-red-800 ">
                Team Ronaldo
              </h2>
              <h3 className="text-center text-4xl md:text-6xl py-8 text-red-800">{scoreR}</h3>
              <div className="flex flex-row justify-around">
                <button className="text-4xl md:text-5xl" onClick={() => {setScoreR(scoreR + 1)}}>+</button>
                <button className="text-4xl md:text-5xl" onClick={() => {setScoreR(scoreR - 1)}}>-</button>
              </div>
            </div>
            
            <div className="h-50 w-65 md:h-60 bg-red-300 md:w-100 my-6 mx-4">
              <h2 className="text-center text-xl md:text-3xl font-bold py-2 text-purple-800">
                Team Messi
              </h2>
              <h3 className="text-center text-4xl md:text-6xl py-8 text-purple-800">{scoreM}</h3>
              <div className="flex flex-row justify-around">
                <button className="text-4xl md:text-5xl" onClick={() => {setScoreM(scoreM + 1)}}>+</button>
                <button className="text-4xl md:text-5xl" onClick={() => {setScoreM(scoreM - 1)}}>-</button>
              </div>
            </div>
          </div>
          <button className="bg-green-600 h-9 w-20 md:h-10 md:w-30 rounded-2xl border-2 border-black border-dashed block mx-auto text-[16px] md:text-2xl px-2 text-white font-bold" onClick={() => {setScoreR(0);
            setScoreM(0)
          }}>Replay</button>
        </div>
      </div>
    </>
  );
}

export default App;
