import React, { useState } from 'react';

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
      id: 0,
      tittel: '',
      dato: '',
      beskrivelse: '',
      kategori: '',
      forfatter: '',
    },
  ]);
  const [kategoriData, setkategoriData] = useState([
    'Kategori1',
    'Kategori2',
    'Kategori3',
  ]);

  const addKategori = () => {
    console.log('Ny Kategori laget!');
  };
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormdata((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  const submitHandle = (event) => {
    console.log('Du prøvde å sende inn ny artikkel!');
    /* event.preventDefault();
    pollData.author = inloggetData.id;
    const createData = async () => {
      const { data, error } = await create(pollData);
      if (error) {
        console.log(error);
        setError(error);
      } else {
        setPollData({ sporsmal: '' });
      }
    };
    createData(); */
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
          <ArtikkelSelect name="kategori" id="kategori" form="artikkelForm">
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
                  key={`${kategori}`}
                  value={`${kategori}`}
                >{`${kategori}`}</ArtikkelOption>
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
          <ArtikkelButton type="submit" form="form1" value="Submit">
            Create
          </ArtikkelButton>
        </ArtikkelForm>
      </Wrapper>
      {modal && <Modal addKategori={addKategori} setModal={setModal} />}
    </>
  );
};

export default NyArtikkel;
