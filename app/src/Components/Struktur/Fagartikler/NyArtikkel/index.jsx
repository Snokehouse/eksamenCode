import React, { useState, useEffect } from 'react';
import { create } from '../../../Utils/Artikkel.js';
import { list, lagKategori } from '../../../Utils/Kategori.js';

import {
  Wrapper,
  Tittel,
  ArtikkelForm,
  ArtikkelInput,
  ArtikkelLabel,
  ArtikkelSelect,
  ArtikkelOption,
  ArtikkelButton,
  Nybutton,
} from './Style';
import Modal from './Modal';

const NyArtikkel = () => {
  const [modal, setModal] = useState(false);
  const [formdata, setFormdata] = useState([
    {
      tittel: '',
      dato: '',
      beskrivelse: '',
      kategori: '',
      forfatter: '',
    },
  ]);
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
      const { data, error } = await list();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setkategoriData(data);
      }
    };
    updateData();
    console.log('re-rendering snoke');
  }, [updateRender]);
  const addKategori = async (value) => {
    const { data, error } = await lagKategori(value);
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      setUpdateRender(true);
      setModal(!modal);
    }
  };
  // Oppdater inputs
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormdata((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  // sende data til api og lage data
  const createData = async () => {
    const { data, error } = await create(formdata);
    if (error) {
      console.log(error);
    } else {
      /* setArtikkel(true);
      setArtikkelData({ 
        id: `${data._id}`, 
        tittel: `${data.tittel}`, 
        dato: `${data.dato}`, 
        beskrivelse: `${data.beskrivelse}`,
        kategori: `${data.kategori}`,
        forfatter: `${data.forfatter}`,
      }); */
      console.log(data);
      alert('Artikkel Registrert');
    }
  };
  // Submit form
  const submitHandle = (event) => {
    event.preventDefault();
    createData();
  };

  return (
    <>
      <Tittel>Ny Artikkel</Tittel>
      <Wrapper>
        <ArtikkelForm id="artikkelForm" onSubmit={submitHandle}>
          <ArtikkelLabel htmlFor="txtTittel">Tittel: </ArtikkelLabel>
          <ArtikkelInput
            id="txtTittel"
            name="tittel"
            type="text"
            value={formdata.tittel}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="txtDato">Dato: </ArtikkelLabel>
          <ArtikkelInput
            id="txtDato"
            name="dato"
            type="date"
            value={formdata.dato}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="txtBeskrivelse">Beskrivelse: </ArtikkelLabel>
          <ArtikkelInput
            id="txtBeskrivelse"
            name="beskrivelse"
            type="text"
            value={formdata.beskrivelse}
            onChange={updateValue}
          />
          <ArtikkelSelect
            id="kategori"
            name="kategori"
            form="artikkelForm"
            value={formdata.kategori}
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
          </ArtikkelSelect>
          <Nybutton type="button" onClick={() => setModal(!modal)}>
            Ny
          </Nybutton>
          <ArtikkelLabel htmlFor="txtForfatter">Forfatter: </ArtikkelLabel>
          <ArtikkelInput
            id="txtForfatter"
            name="forfatter"
            type="text"
            value={formdata.forfatter}
            onChange={updateValue}
          />
          <ArtikkelButton type="submit" value="Submit">
            Create
          </ArtikkelButton>
        </ArtikkelForm>
      </Wrapper>
      {modal && (
        <Modal
          addKategori={addKategori}
          setModal={setModal}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
    </>
  );
};

export default NyArtikkel;
