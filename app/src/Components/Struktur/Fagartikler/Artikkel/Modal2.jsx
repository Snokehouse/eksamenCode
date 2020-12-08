import React from 'react';
import PropTypes from 'prop-types';

import {
  ModalContainer,
  ModalWrapper,
  ModalHeader,
  ModalUnderTittel,
  ModalButton,
  ArtikkelForm,
  ArtikkelInput,
  ArtikkelLabel,
  ArtikkelButton,
} from '../NyArtikkel/Style';

const Modal = ({ setModal2, addKategori, modalData, setModalData }) => {
  // validere props
  Modal.propTypes = {
    setModal2: PropTypes.func,
    addKategori: PropTypes.func,
    modalData: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    setModalData: PropTypes.func,
  };
  // legge til kategori
  const handleSubmit = (event) => {
    event.preventDefault();
    addKategori(modalData);
  };
  // oppdatere verdi
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setModalData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  // lukke modal
  const handleClose = () => {
    setModal2(false);
  };
  return (
    <ModalContainer id="modal">
      <ModalWrapper className="modal_inner_wrapper">
        <ModalHeader>
          <ModalUnderTittel>New todo</ModalUnderTittel>
          <ModalButton type="button" onClick={() => handleClose()}>
            X
          </ModalButton>
        </ModalHeader>
        <ArtikkelForm id="todo_form" onSubmit={handleSubmit}>
          <ArtikkelLabel htmlFor="txtKategori">Kategori: </ArtikkelLabel>
          <ArtikkelInput
            id="txtKategori"
            name="kategori"
            value={modalData.modalValue}
            onChange={updateValue}
          />
          <ArtikkelButton type="submit">Submit</ArtikkelButton>
        </ArtikkelForm>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
