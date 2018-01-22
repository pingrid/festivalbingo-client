import React from 'react';
import PT from 'prop-types';
import { Link } from 'react-router-dom';
import Tile from './Tile';
import GuessModal from '../guess/GuessModal';

const tiles = [
    { x: 0, y: 0, guess: [] },
    { x: 0, y: 1, guess: [] },
    { x: 0, y: 2, guess: [] },
    { x: 0, y: 3, guess: [] },
    { x: 0, y: 4, guess: [] },
    { x: 1, y: 0, guess: [] },
    { x: 1, y: 1, guess: [] },
    { x: 1, y: 2, guess: [] },
    { x: 1, y: 3, guess: [] },
    { x: 1, y: 4, guess: [] },
    { x: 2, y: 0, guess: [] },
    { x: 2, y: 1, guess: [] },
    { x: 2, y: 2, guess: [] },
    { x: 2, y: 3, guess: [] },
    { x: 2, y: 4, guess: [] },
    { x: 3, y: 0, guess: [] },
    { x: 3, y: 1, guess: [] },
    { x: 3, y: 2, guess: [] },
    { x: 3, y: 3, guess: [] },
    { x: 3, y: 4, guess: [] },
    { x: 4, y: 0, guess: [] },
    { x: 4, y: 1, guess: [] },
    { x: 4, y: 2, guess: [] },
    { x: 4, y: 3, guess: [] },
    { x: 4, y: 4, guess: [] }
];

const Board = ({ closeTileModal, openTileModal, modalTile, tileModalId }) => {
    const N = 5;

    const tilesComponents = tiles.map((tile, inc) =>
        <Tile tile={tile} openTileModal={openTileModal} N={N} key={`tile-${inc}`} />);
    const isOpen = !!(tileModalId);

    return (
        <div className="board">
            <Link to="/"><i className="back-button material-icons">arrow_back</i></Link>
            <h1 className="center-text fancy-title mb-7">Board</h1>

            <div className="bingo-board">
                {tilesComponents}
            </div>
            <GuessModal isOpen={isOpen} modalTile={modalTile} closeTileModal={closeTileModal} />
        </div>
    );
};

Board.propTypes = {
    closeTileModal: PT.func.isRequired,
    openTileModal: PT.func.isRequired,
    modalTile: PT.object,
    tileModalId: PT.string
};

Board.defaultProps = {
    modalTile: undefined,
    tileModalId: undefined
};

export default Board;
