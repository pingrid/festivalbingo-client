import React from 'react';
import PT from 'prop-types';
import Modal from '../../components/modal/Modal';
import Guess from './Guess';

const GuessModal = ({ closeTileModal, isOpen, modalTile }) => {
    if (!isOpen) {
        return <noscript />;
    }
    return (
        <Modal
            contentLabel="Tile modal"
            isOpen={isOpen}
            closeButton
            onRequestClose={closeTileModal}
            className="large"
            contentClass=""
        >
            <Guess closeTileModal={closeTileModal} modalTile={modalTile} />
        </Modal>
    );
};

GuessModal.propTypes = {
    closeTileModal: PT.func.isRequired,
    isOpen: PT.bool.isRequired,
    modalTile: PT.object
};

GuessModal.defaultProps = {
    modalTile: undefined
};

export default GuessModal;
