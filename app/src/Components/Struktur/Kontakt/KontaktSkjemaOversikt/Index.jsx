import React, { useState, useEffect } from 'react';

import { list } from '../../../Utils/Kontakt.js';
import { Container, Tittel, Paragraf } from './Style';
import SkjemaItem from './SkjemaItem';

const KontaktSkjemaOversikt = () => {
  const [innLastetData, setInnLastetData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await list();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setInnLastetData(data);
      }
    };
    updateData();
  }, []);

  return (
    <>
      <Tittel>Kontaktskjemaer</Tittel>
      <Container>
        {innLastetData < 1 ? (
          <Paragraf>Fant ingen kontaktskjemaer å vise.</Paragraf>
        ) : (
          innLastetData.map((skjema) => (
            <SkjemaItem key={skjema._id} skjema={skjema} />
          ))
        )}
      </Container>
    </>
  );
};

export default KontaktSkjemaOversikt;
