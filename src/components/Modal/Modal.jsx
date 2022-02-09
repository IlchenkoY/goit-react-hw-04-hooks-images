import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ModalEl, Overlay } from './Modal.styled';

const Modal = ({ description, largeImageUrl, onModalClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onModalClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onModalClose]);

  const handleOverlayClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      onModalClose();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalEl>
        <img src={largeImageUrl} alt={description} />
      </ModalEl>
    </Overlay>
  );
};

Modal.propTypes = {
  description: PropTypes.string.isRequired,
  largeImageUrl: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export { Modal };
