import React from 'react';
import PT from 'prop-types';
import Modal from '../../../components/modal/Modal';
import Guess from './Guess';

const GuessModal = (props) => {
    const { closeTileModal, fields, tileModalId, tile } = props;
    const isOpen = tileModalId && tileModalId === tile.tileId;
    if (!isOpen) {
        return <noscript />;
    }

    const initialValues = {
        artist1: fields[0].artist,
        artist2: fields[1].artist,
        artist3: fields[2].artist
    };

    return (
        <Modal
            contentLabel="Tile modal"
            isOpen={isOpen}
            closeButton
            onRequestClose={closeTileModal}
            className="large"
            contentClass=""
        >
            <Guess {...props} initialValues={initialValues} />
        </Modal>
    );
};

GuessModal.propTypes = {
    closeTileModal: PT.func.isRequired,
    tileModalId: PT.string,
    fields: PT.arrayOf(PT.object),
    tile: PT.object.isRequired
};

GuessModal.defaultProps = {
    modalTile: undefined,
    tileModalId: undefined
};

export default GuessModal;
