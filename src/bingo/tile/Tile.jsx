import React from 'react';
import PT from 'prop-types';
import classnames from 'classnames';
import './tile.scss';
import GuessModalContainer from './guess/GuessModalContainer';

const numberOfCorrectTiles = (artists, booked) => {
    let numberOfCorrect = 0;
    artists.forEach((artist) => {
        if (booked.indexOf(artist) !== -1) {
            numberOfCorrect += 1;
        }
    });
    return numberOfCorrect;
};

const Tile = ({ openTileModal, tile, N, fields, artists }) => {
    const numberOfCorrect = numberOfCorrectTiles(fields, artists);
    const guesses = fields.map(field => <span>{field.artist}</span>);
    return (
        <div
            className="tile"
            style={{ width: `${(100 / N)}%`, height: `${(100 / N) - 5}vh` }}
        >
            <button
                className={classnames('tile', `correct-guess-${numberOfCorrect}`)}
                onClick={() => openTileModal(tile.tileId)}
            >
                {numberOfCorrect > 0 && <span className="correct-number">{numberOfCorrect}</span>}
                {guesses}
            </button>
            <GuessModalContainer fields={fields} tile={tile} />
        </div>
    );
};

Tile.propTypes = {
    openTileModal: PT.func.isRequired,
    tile: PT.shape({
        x: PT.oneOfType([PT.string, PT.number]),
        y: PT.oneOfType([PT.string, PT.number]),
        fields: PT.arrayOf(PT.string)
    }).isRequired,
    artists: PT.arrayOf(PT.String),
    fields: PT.arrayOf(PT.object),
    N: PT.number
};

Tile.defaultProps = {
    artists: [],
    N: 5
};

export default Tile;
