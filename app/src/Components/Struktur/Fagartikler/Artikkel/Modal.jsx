import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

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

const Modal = ({
  setModal,
  redigereSubmit,
  innLastetData,
  setInnLastetData,
}) => {
  // validere props
  Modal.propTypes = {
    setModal: PropTypes.func,
    redigereSubmit: PropTypes.func,
    innLastetData: PropTypes.object,
    setInnLastetData: PropTypes.func,
  };
  let datoStr = innLastetData.dato;
  datoStr = moment(datoStr).format('yyyy-MM-DD');
  innLastetData.dato = datoStr;
  // legge til kategori
  const handleSubmit = (event) => {
    event.preventDefault();
    redigereSubmit(innLastetData);
  };
  // oppdatere verdi
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setInnLastetData((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  // lukke modal
  const handleClose = () => {
    setModal(false);
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
          <ArtikkelLabel htmlFor="txtTittel">Tittel: </ArtikkelLabel>
          <ArtikkelInput
            id="txtTittel"
            name="tittel"
            type="text"
            value={innLastetData.tittel}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="txtDato">Dato: </ArtikkelLabel>
          <ArtikkelInput
            id="txtDato"
            name="dato"
            type="date"
            value={innLastetData.dato}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="txtBeskrivelse">Beskrivelse: </ArtikkelLabel>
          <ArtikkelInput
            id="txtBeskrivelse"
            name="beskrivelse"
            type="text"
            value={innLastetData.beskrivelse}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="kategori">Kategori: </ArtikkelLabel>
          <ArtikkelInput
            id="kategori"
            name="kategori"
            type="text"
            value={innLastetData.kategori}
            onChange={updateValue}
            readOnly
          />
          <ArtikkelLabel htmlFor="txtForfatter">Forfatter: </ArtikkelLabel>
          <ArtikkelInput
            id="txtForfatter"
            name="forfatter"
            type="text"
            value={innLastetData.forfatter}
            onChange={updateValue}
            readOnly
          />
          <ArtikkelButton type="submit">Submit</ArtikkelButton>
        </ArtikkelForm>
      </ModalWrapper>
    </ModalContainer>
  );
};

export default Modal;
