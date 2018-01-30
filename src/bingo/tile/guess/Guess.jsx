import React from 'react';
import PT from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import InputField from './../../../components/form/InputField';

const checkIfValid = (artists, currentTile, artist) =>
    (artists && (!artists[artist] || artists[artist] < 3) ? undefined : 'You have already added this artists 3 times');

const Guess = (props) => {
    const { error, handleSubmit } = props;
    const { artists, name, closeTileModal, tile, postArtist, submitting } = props;

    const onSubmitFunc = (values) => {
        const updatedArtists = [values.artist1, values.artist2, values.artist3];
        closeTileModal();
        postArtist('oya2018', name, tile.tileId, updatedArtists);
    };

    return (
        <form className="tile-modal p-4" onSubmit={handleSubmit(onSubmitFunc)}>
            <h2 className="fancy-title text-dark_cerulean center-text mb-2">
                Add guess for [{tile.posx},{tile.posy}]
            </h2>
            <div className="mb-2">
                <Field
                    name="artist1"
                    component={InputField}
                    type="text"
                    validate={[value => checkIfValid(artists, value)]}
                />
            </div>
            <div className="mb-2">
                <Field
                    name="artist2"
                    component={InputField}
                    type="text"
                    validate={[value => checkIfValid(artists, value)]}
                />
            </div>
            <div className="mb-6">
                <Field
                    name="artist3"
                    component={InputField}
                    type="text"
                    validate={[value => checkIfValid(artists, value)]}
                />
            </div>
            {error && <strong>{error}</strong>}
            <div className="save-button-wrapper">
                <button type="submit" className="bingo-button guess-button" disabled={submitting}>
                    Save
                </button>
            </div>
        </form>
    );
};

Guess.propTypes = {
    handleSubmit: PT.func.isRequired,
    postArtist: PT.func.isRequired,
    closeTileModal: PT.func.isRequired,
    tile: PT.object.isRequired,
    name: PT.string.isRequired,
    error: PT.string,
    artists: PT.arrayOf(PT.string),
    submitting: PT.bool.isRequired
};

Guess.defaultProps = {
    error: '',
    artists: []
};


export default reduxForm({ form: 'guessArtist' })(Guess);
