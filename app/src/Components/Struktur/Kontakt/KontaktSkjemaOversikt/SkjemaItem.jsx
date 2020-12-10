import React from 'react';
import PropTypes from 'prop-types';

import { Container, Paragraf, UnderTittel, SkjemaWrapper } from './Style';

const ArtikkelItem = ({ skjema }) => {
  ArtikkelItem.propTypes = {
    skjema: PropTypes.object,
  };
  return (
    <Container>
      <SkjemaWrapper>
        <UnderTittel>{`Navn: ${skjema.name}`}</UnderTittel>
        <Paragraf>{`Email: ${skjema.email}`}</Paragraf>
        <Paragraf>{`Emne: ${skjema.emne}`}</Paragraf>
        <Paragraf>{`Hendvendelse: ${skjema.hendvendelse}`}</Paragraf>
      </SkjemaWrapper>
    </Container>
  );
};
export default ArtikkelItem;
