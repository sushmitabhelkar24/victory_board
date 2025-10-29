import React from 'react'


function Score({teamName,addBtn,minusBtn,score,color,isWinner,isWin}) {
  return (
    <>
    <div className="h-50 w-65 md:h-60 bg-red-300 md:w-100 my-6 mx-4">
              <h2 className={`text-center text-xl md:text-3xl font-bold py-2 ${color} `}>
               {teamName}{isWinner?"🏆🏆":"" }
              </h2>
            
              <h3 className={`text-center text-4xl md:text-6xl py-8 ${color}`}>{score}</h3>
              {isWin?null:(<><div className="flex flex-row justify-around">
                <button className="text-4xl md:text-5xl" onClick={minusBtn}>-</button>
                <button className="text-4xl md:text-5xl" onClick={addBtn} >+</button>
                
              </div></>)}
          </div>
         
        </>
     
  )
}


export default Score;

