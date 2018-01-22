import React, { Component } from 'react';
import ReactModal from 'react-modal';
import classnames from 'classnames';
import { propTypes, defaultProps } from './ModalProps';

const cls = className => classnames('modal', className);

class Modal extends Component {
    static setAppElement(element) { // eslint-disable-line
        ReactModal.setAppElement(element);
    }

    constructor() {
        super();
        this.onRequestClose = this.onRequestClose.bind(this);
    }

    onRequestClose(evt) {
        const { onRequestClose, shouldCloseOnOverlayClick } = this.props;
        if (shouldCloseOnOverlayClick || evt.type === 'keydown') {
            onRequestClose();
        } else if (this.closeButtonRef) {
            this.closeButtonRef.focus();
        } else {
            this.modalRef.portal.refs.content.focus();
        }
    }

    render() {
        const { children, closeButton, shouldCloseOnOverlayClick, contentClass, ...props } = this.props;
        return (
            <ReactModal
                {...props}
                className={cls(props.className)}
                onRequestClose={this.onRequestClose}
                overlayClassName="modal__overlay"
                shouldCloseOnOverlayClick
                ref={modalRef => (this.modalRef = modalRef)}
            >
                <section className={contentClass}>
                    {children}
                    {closeButton &&
                    <button
                        className={classnames(
                            shouldCloseOnOverlayClick || 'modal__close--shake',
                            'modal-close-button',
                            'invisible-button'
                        )}
                        onClick={props.onRequestClose}
                        ref={closeButtonRef => (this.closeButtonRef = closeButtonRef)}
                    >
                        <i className="material-icons close-icon">close</i>
                    </button>
                    }
                </section>
            </ReactModal>
        );
    }
}

Modal.propTypes = propTypes;
Modal.defaultProps = defaultProps;

export default Modal;
