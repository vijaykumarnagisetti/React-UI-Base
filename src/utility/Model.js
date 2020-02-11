import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
// import * as _ from 'lodash';

function Modal({ open, onCloseModal, content, modalProps }) {
  return (
    <div id="lb-modal-main">
      {
        modalProps.blurBg &&
        <div
          className={open ? 'modalBackGround open' : 'modalBackGround close'}
          onClick={modalProps.clickOutToClose ? () => onCloseModal() : null}
        />
      }
      <div
        className={open ? 'mainDiv open' : 'mainDiv close'}
        id={modalProps.progress ? 'lb-modal-progress' : ''}
        style={modalProps.style}
      >
        {
          !modalProps.clickOutToClose &&
          <div id="modalHeader">
            <div
              id="modalCloseButton"
              onClick={() => onCloseModal()}
            >
              &times;
            </div>
          </div>
        }
        {content}
      </div>
    </div>
  );
}

Modal.propTypes = {
  content: PropTypes.element,
  modalProps: PropTypes.shape({
    blurBg: PropTypes.bool,
    clickOutToClose: PropTypes.bool,
    style: PropTypes.object,
  }
  ),
  onCloseModal: PropTypes.func,
  open: PropTypes.bool,
};

Modal.defaultProps = {
  content: <div></div>,
  onCloseModal: () => { },
  open: false,
  modalProps: {
    blurBg: true,
    clickOutToClose: false,
    style: {},
  },
};


export default Modal;
