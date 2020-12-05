import React, { useState } from 'react';

import { Container, Tittel } from './Style';

const NyArtikkel = () => {
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
      <Container>
        <form onSubmit={submitHandle}>
          <label htmlFor="txtTittel">Tittel: </label>
          <input
            id="txtTittel"
            name="tittel"
            type="text"
            value={formdata.tittel}
            onChange={updateValue}
          />
          <label htmlFor="txtDato">Dato: </label>
          <input
            id="txtDato"
            name="dato"
            type="date"
            value={formdata.dato}
            onChange={updateValue}
          />
          <label htmlFor="txtBeskrivelse">Beskrivelse: </label>
          <input
            id="txtBeskrivelse"
            name="beskrivelse"
            type="text"
            value={formdata.beskrivelse}
            onChange={updateValue}
          />

          <label htmlFor="txtForfatter">Forfatter: </label>
          <input
            id="txtForfatter"
            name="forfatter"
            type="text"
            value={formdata.forfatter}
            onChange={updateValue}
          />
        </form>
      </Container>
    </>
  );
};

export default NyArtikkel;
