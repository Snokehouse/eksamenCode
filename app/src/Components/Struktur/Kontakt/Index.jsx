import React, { useState } from 'react';

import {
  Container,
  FormWrapper,
  Tittel,
  UnderTittel,
  ArtikkelForm,
  ArtikkelInput,
  ArtikkelLabel,
  ArtikkelButton,
} from './Style';

const Kontakt = () => {
  const [formdata, setFormdata] = useState([
    {
      name: '',
      email: '',
      emne: '',
      hendvendelse: '',
    },
  ]);

  // Validere form
  const validateForm = () => {
    if (
      formdata.name !== undefined &&
      formdata.email !== undefined &&
      formdata.emne !== undefined &&
      formdata.hendvendelse !== undefined
    ) {
      return true;
    }
    return false;
  };

  // Oppdater inputs
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormdata((prev) => ({
      ...prev,
      ...inputValue,
    }));
    validateForm();
  };

  return (
    <>
      <Tittel>Kontakt oss</Tittel>
      <Container>
        <FormWrapper>
          <UnderTittel>KontaktSkjema</UnderTittel>
          <ArtikkelForm>
            <ArtikkelLabel>Navn: </ArtikkelLabel>
            <ArtikkelInput />
            <ArtikkelLabel>Email: </ArtikkelLabel>
            <ArtikkelInput />
            <ArtikkelLabel>Emne: </ArtikkelLabel>
            <ArtikkelInput />
            <ArtikkelLabel>Hendvendelse: </ArtikkelLabel>
            <ArtikkelInput />
            <ArtikkelButton>Send inn</ArtikkelButton>
          </ArtikkelForm>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Kontakt;
