import React from 'react';
import ReactDOM from 'react-dom';
import * as minesweeper from '../minesweeper';


class Tile extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        const status = this.props.tile
        const tileRender = () => {
            if (status.bombed && status.explored){
                return 'X';
            } else if (status.flagged){
                return 'F';
            } else if (!status.explored){
                return 'T';
            } else {
                return status.adjacentBombCount().toString();
            }
        }
        return (
            <div className='tile' onClick={this.handleClick}>{tileRender()}</div>
        )
    }

    handleClick(e){
        const flagged = e.altKey ? true : false;
        this.props.updateGame(this.props.tile, flagged)
    }

}

export default Tile;