import Player from "./components/player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { useState } from "react";
function App() {
  const [activePlayer, setActivePlayer]= useState('X');
  const [gameTurns, setGameTurns]= useState([])
  
  function handleSelectSquare(){
    setActivePlayer((curActivePlayer)=> curActivePlayer === 'X'? 'O': 'X')
  }
  return (
   <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
 <Player name="Joelle" symbol="1"  isActive={activePlayer ==='X'}/>
 <Player name="Jordan" symbol="2"  isActive={activePlayer ==='O'}/>

      </ol>
<GameBoard  onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
    </div>
    <Log></Log>
   </main>
  )
}

export default App
