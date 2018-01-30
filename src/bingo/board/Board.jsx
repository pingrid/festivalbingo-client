import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import TileContainer from '../tile/TileContainer';

const Board = ({ board, tiles }) => {
    if (!tiles) {
        return <noscript />;
    }

    const tilesComponents = tiles.map((tile, inc) => (
        <TileContainer
            tile={tile}
            artists={board.artists}
            N={board.dimensions}
            key={`tile-${inc}`}
        />
    ));

    return (
        <div className="board">
            <div className="links-wrapper mb-7">
                <Link to="/"><i className="back-button material-icons">arrow_back</i></Link>
                <h1 className="center-text fancy-title">Board - {board.id}</h1>
                <Link to="/rules" className="text-sunglow">Rules</Link>
            </div>
            <div className="bingo-board">
                {tilesComponents}
            </div>
        </div>
    );
};

Board.propTypes = {
    openTileModal: PT.func.isRequired,
    board: PT.object.isRequired,
    tiles: PT.arrayOf(PT.object)
};

Board.defaultProps = {
    modalTile: undefined,
    tileModalId: undefined
};

export default Board;
