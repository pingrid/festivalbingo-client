import React from 'react';
import Modal from './Modal';
import { confirmModalPropTypes, confirmModalDefaultProps } from './ModalProps';

const ConfirmModal = (props) => {
    const { isOpen, handleClose, onComplete, onCancel, children, closeButton } = props;
    const { cancelButtonKey, completeButtonKey, contentLabel, className } = props;
    return (
        <div className="confirm">
            <Modal
                className={className}
                contentLabel={contentLabel}
                isOpen={isOpen}
                closeButton={closeButton}
                onRequestClose={handleClose}
                shouldCloseOnOverlayClick
            >
                <div>
                    <div className="mb-5">
                        {children}
                    </div>
                    <button
                        size="small"
                        color="cancel"
                        onClick={onCancel}
                        type="button"
                    >
                        Cancel
                    </button>
                    <button
                        size="small"
                        color="turquoise"
                        onClick={onComplete}
                        className="button-float-right"
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </div>
    );
};

ConfirmModal.propTypes = confirmModalPropTypes;
ConfirmModal.defaultProps = confirmModalDefaultProps;

export default ConfirmModal;
