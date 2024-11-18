import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';
import { WhiteElephant } from './WhiteElephant';

// const App = Client({ 
//     game: TicTacToe,
//     board: TicTacToeBoard
// });

const App = Client({
    game: WhiteElephant,
})

export default App;