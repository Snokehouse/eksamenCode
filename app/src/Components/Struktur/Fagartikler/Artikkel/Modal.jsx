import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { listKategori, lagKategori } from '../../../Utils/Kategori.js';
import { listForfatter } from '../../../Utils/Forfatter.js';

import Modal2 from './Modal2';

import {
  ModalContainer,
  ModalWrapper,
  ModalHeader,
  ModalUnderTittel,
  ModalButton,
  ArtikkelForm,
  ArtikkelInput,
  ArtikkelLabel,
  ArtikkelArea,
  ArtikkelButton,
  ArtikkelSelectK,
  ArtikkelSelectF,
  ArtikkelOption,
  Nybutton,
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
  const [modal2, setModal2] = useState(false);

  // Forfatter
  const [forfatterData, setforfatterData] = useState([]);
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await listForfatter();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setforfatterData(data.data);
      }
    };
    updateData();
  }, []);

  // Kategori
  const [modalData, setModalData] = useState([
    {
      modalValue: '',
    },
  ]);

  const [kategoriData, setkategoriData] = useState([]);
  const [updateRender, setUpdateRender] = useState(false);
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await listKategori();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setkategoriData(data);
      }
    };
    updateData();
  }, [updateRender]);

  const addKategori = async (value) => {
    const { data, error } = await lagKategori(value);
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      setUpdateRender(true);
      setModal2(!modal2);
    }
  };

  // formatere dato string
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
          <ArtikkelLabel htmlFor="hemmelig">Åpen/Hemmelig: </ArtikkelLabel>
          <ArtikkelSelectF
            id="hemmelig"
            name="hemmelig"
            form="todo_form"
            value={innLastetData.hemmelig}
            onChange={updateValue}
          >
            <ArtikkelOption value="" hidden>
              Åpen/Hemmelig
            </ArtikkelOption>
            <ArtikkelOption value="false">Åpen</ArtikkelOption>
            <ArtikkelOption value="true">Hemmelig</ArtikkelOption>
          </ArtikkelSelectF>
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
          <ArtikkelLabel htmlFor="innhold">Innhold: </ArtikkelLabel>
          <ArtikkelArea
            form="artikkelForm"
            id="innhold"
            name="innhold"
            type="textArea"
            value={innLastetData.innhold}
            onChange={updateValue}
          />
          <br />
          <ArtikkelLabel htmlFor="kategori">Kategori: </ArtikkelLabel>
          <br />
          <ArtikkelSelectK
            id="kategori"
            name="kategori"
            form="artikkelForm"
            value={innLastetData.kategori}
            onChange={updateValue}
          >
            <ArtikkelOption value="" hidden>
              Velg Kategori
            </ArtikkelOption>
            {kategoriData < 1 ? (
              <ArtikkelOption value={null}>
                Ingen kategorier funnet, lag en ny!
              </ArtikkelOption>
            ) : (
              kategoriData.map((kategori) => (
                <ArtikkelOption
                  key={`${kategori.kategori}`}
                  value={`${kategori.kategori}`}
                >{`${kategori.kategori}`}</ArtikkelOption>
              ))
            )}
          </ArtikkelSelectK>
          <Nybutton type="button" onClick={() => setModal2(!modal2)}>
            Ny
          </Nybutton>
          <br />
          <ArtikkelLabel htmlFor="forfatter">Forfatter: </ArtikkelLabel>
          <br />
          <ArtikkelSelectF
            id="forfatter"
            name="forfatter"
            form="artikkelForm"
            value={innLastetData.forfatter}
            onChange={updateValue}
          >
            <ArtikkelOption value="" hidden>
              Velg Forfatter
            </ArtikkelOption>
            {forfatterData < 1 ? (
              <ArtikkelOption value={null}>
                Ingen forfatter funnet!
              </ArtikkelOption>
            ) : (
              forfatterData.map((forfatter) => (
                <ArtikkelOption
                  key={`${forfatter.forfatter}`}
                  value={`${forfatter.forfatter}`}
                >{`${forfatter.forfatter}`}</ArtikkelOption>
              ))
            )}
          </ArtikkelSelectF>
          <ArtikkelButton type="submit">Submit</ArtikkelButton>
        </ArtikkelForm>
      </ModalWrapper>
      {modal2 && (
        <Modal2
          addKategori={addKategori}
          setModal2={setModal2}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
    </ModalContainer>
  );
};

export default Modal;
