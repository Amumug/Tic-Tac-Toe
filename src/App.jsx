import Player from "./component/Player";
import GameBoard from "./component/GameBoard";
function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player1" symbol="X"/>
          <Player initialName="Player2" symbol="O"/>
        </ol>
        <GameBoard/>
      </div>
      LOG
    </main>
  );
}

export default App;
