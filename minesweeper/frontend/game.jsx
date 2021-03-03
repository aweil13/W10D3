import React from 'react';
import ReactDOM from 'react-dom';
import * as minesweeper from '../minesweeper';
import Board from './board.jsx';

class Game extends React.Component {

    constructor(props){
        super(props);
        let newBoard = new minesweeper.Board();
        this.state = {board: newBoard};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(){

    }

    render(){
        return (
            <div>
                <Board
                    board={this.state.board}
                    game={this.updateGame}
                />
            </div>
        )
    }

}

export default Game;