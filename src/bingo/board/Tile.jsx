import React from 'react';
import PT from 'prop-types';

const Tile = ({ openTileModal, tile, N }) => {
    const { x, y, guess } = tile;

    const tileId = `${x}-${y}`;
    return (
        <button
            className="tile"
            style={{ width: `${(100 / N)}%`, height: `${(100 / N) - 5}vh` }}
            onClick={() => openTileModal(tileId, tile)}
        >
            {guess}
        </button>
    );
};

Tile.propTypes = {
    openTileModal: PT.func.isRequired,
    tile: PT.shape({
        x: PT.oneOf([PT.string, PT.number]),
        y: PT.oneOf([PT.string, PT.number]),
        guess: PT.arrayOf(PT.string)
    }).isRequired
};

export default Tile;
