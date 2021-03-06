import React from 'react';
import ReactDOM from 'react-dom';
import * as minesweeper from '../minesweeper';
import Board from './board.jsx';

class Game extends React.Component {

    constructor(props){
        super(props);
        let newBoard = new minesweeper.Board(8, 8);
        this.state = {board: newBoard};
        this.updateGame = this.updateGame.bind(this);
    }

    updateGame(tile, flagged){
        if (flagged){
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({board: this.state.board})
    }

    render(){
        
        return (
            <div>
                <Board
                    board={this.state.board}
                    updateGame={this.updateGame}
                />
            </div>
        )
    }

}

export default Game;