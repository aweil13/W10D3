import React from 'react';
import ReactDOM from 'react-dom';
import * as minesweeper from '../minesweeper';


class Tile extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        const status = this.props.tile
        const tileRender = () => {
            if (status.bombed 
        }
        return (
            <div>
                {tileRender}
            </div>
        )
    }

}

export default Tile;