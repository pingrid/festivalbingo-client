import React from 'react';
import PT from 'prop-types';
import { reduxForm, Field } from 'redux-form';

const Guess = ({ handleSubmit, closeTileModal, modalTile }) => {
    const onSubmitFunc = values => {
        closeTileModal();
        console.log('submitting: ', Object.values(values));
    };
    return (
        <form className="tile-modal p-4" onSubmit={handleSubmit(onSubmitFunc)}>
            <h2 className="fancy-title text-dark_cerulean center-text mb-2">
                Add guess for [{modalTile.x},{modalTile.y}]
            </h2>
            <div className="mb-2">
                <label htmlFor="artist1" className="display-block mr-2">Artist name</label>
                <Field
                    name="artist1"
                    component="input"
                    type="text"
                    className="guess-field"
                />
            </div>
            <div className="mb-2">
                <label htmlFor="artist2" className="display-block mr-2">Artist name</label>
                <Field
                    name="artist2"
                    component="input"
                    type="text"
                    className="guess-field"
                />
            </div>
            <div className="mb-6">
                <label htmlFor="artist3" className="display-block mr-2">Artist name</label>
                <Field
                    name="artist3"
                    component="input"
                    type="text"
                    className="guess-field"
                />
            </div>
            <div className="save-button-wrapper">
                <button type="submit" className="bingo-button guess-button">
                    Save
                </button>
            </div>
        </form>
    );
};

Guess.propTypes = {
    handleSubmit: PT.func.isRequired,
    closeTileModal: PT.func.isRequired,
    modalTile: PT.object.isRequired
};


export default reduxForm({ form: 'guessArtist' })(Guess);
