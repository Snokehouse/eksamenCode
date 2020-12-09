import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { sendKontaktskjema } from '../../Utils/Kontakt.js';

import {
  Container,
  FormWrapper,
  Tittel,
  UnderTittel,
  KontaktForm,
  KontaktInput,
  KontaktLabel,
  KontaktArea,
  KontaktButton,
} from './Style';

const Kontakt = () => {
  const history = useHistory();
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
  };

  // sende data til api og lage data
  const sendData = async () => {
    const { data, error } = await sendKontaktskjema(formdata);
    if (error) {
      console.log(error);
    } else {
      alert(
        'Hendvendelsen er registrert, forventet behandlingstid: hvertfall 100 år vi har ikke ansatt noen til det enda :/'
      );
      history.push('/');
    }
  };

  // Submit form
  const submitHandle = (event) => {
    event.preventDefault();
    if (validateForm()) {
      sendData();
    } else {
      alert('Feil');
    }
  };

  return (
    <>
      <Tittel>Kontakt oss</Tittel>
      <Container>
        <FormWrapper>
          <UnderTittel>KontaktSkjema</UnderTittel>
          <KontaktForm id="kontaktSkjema" onSubmit={submitHandle}>
            <KontaktLabel htmlFor="name">Navn: </KontaktLabel>
            <KontaktInput
              id="name"
              name="name"
              type="text"
              value={formdata.name}
              onChange={updateValue}
            />
            <KontaktLabel>Email: </KontaktLabel>
            <KontaktInput
              id="email"
              name="email"
              type="text"
              value={formdata.email}
              onChange={updateValue}
            />
            <KontaktLabel>Emne: </KontaktLabel>
            <KontaktInput
              id="emne"
              name="emne"
              type="text"
              value={formdata.emne}
              onChange={updateValue}
            />
            <KontaktLabel>Hendvendelse: </KontaktLabel>
            <KontaktArea
              form="kontaktSkjema"
              id="hendvendelse"
              name="hendvendelse"
              type="textArea"
              value={formdata.hendvendelse}
              onChange={updateValue}
            />
            {validateForm() ? (
              <KontaktButton type="submit">Send inn</KontaktButton>
            ) : (
              <KontaktButton disabled type="submit">
                Send inn
              </KontaktButton>
            )}
          </KontaktForm>
        </FormWrapper>
      </Container>
    </>
  );
};

export default Kontakt;
