import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';
import { WhiteElephant } from './WhiteElephant';
import { WhiteElephantBoard } from './WhiteElephantBoard';

// const App = Client({ 
//     game: TicTacToe,
//     board: TicTacToeBoard
// });

const App = Client({
    game: WhiteElephant,
    board: WhiteElephantBoard
})

export default App;