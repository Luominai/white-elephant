import { Client } from 'boardgame.io/react';
import { Local } from 'boardgame.io/multiplayer';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';
import { WhiteElephant } from './WhiteElephant';
import { WhiteElephantBoard } from './WhiteElephantBoard';

// const App = Client({ 
//     game: TicTacToe,
//     board: TicTacToeBoard
// });

const WhiteElephantClient = Client({
    game: WhiteElephant,
    board: WhiteElephantBoard,
    multiplayer: Local()
})

const App = () => (
    <div>
      <WhiteElephantClient playerID="0" />
      <WhiteElephantClient playerID="1" />
    </div>
  );

export default App;