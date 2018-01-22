import PT from 'prop-types';
export const propTypes = {
    closeButton: PT.bool,
    contentLabel: PT.string.isRequired,
    children: PT.node.isRequired,
    onAfterOpen: PT.func,
    onRequestClose: PT.func.isRequired,
    shouldCloseOnOverlayClick: PT.bool,
    closeTimeoutMS: PT.number,
    contentClass: PT.string
};

export const defaultProps = {
    closeButton: true,
    shouldCloseOnOverlayClick: true,
    closeTimeoutMS: 0,
    contentClass: null,
    onAfterOpen: () => {} // eslint-disable-line
};

export const confirmModalPropTypes = {
    isOpen: PT.bool.isRequired,
    handleClose: PT.func.isRequired,
    onComplete: PT.func.isRequired,
    onCancel: PT.func.isRequired,
    children: PT.object.isRequired,
    cancelButtonKey: PT.string,
    completeButtonKey: PT.string,
    contentLabel: PT.string,
    className: PT.string,
    closeButton: PT.bool
};

export const confirmModalDefaultProps = {
    isOpen: false,
    handleClose: null,
    onComplete: null,
    oncCancel: null,
    children: 'confirm modal',
    cancelButtonKey: 'confirmation.modal.default.cancel.button',
    completeButtonKey: 'confirmation.modal.default.confirm.button',
    contentLabel: 'Confirmation modal',
    className: ''
};
