import React from 'react';
import Tile from './tile.jsx';
import * as minesweeper from '../minesweeper';


class Board extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const board = this.props.board;
        const mappedTiles = board.grid.map((row, idx) => {
            return <div key={idx}>{row.map((tile, idx2) => {
               return <Tile tile={tile} key={idx2}/>
            })}  
            </div>       
        });
        return (
            <div>
                {mappedTiles}
            </div>       
        );
    }

}

export default Board;