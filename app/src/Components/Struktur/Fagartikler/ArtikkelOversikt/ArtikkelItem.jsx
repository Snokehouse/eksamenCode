import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  LinkWrapper,
  Paragraf,
  UnderTittel,
  SmallTittel,
} from './Style';

const ArtikkelItem = ({ artikkel }) => {
  ArtikkelItem.propTypes = {
    artikkel: PropTypes.object,
  };
  return (
    <Container>
      <LinkWrapper href={`/fagartikkel/${artikkel.id}`}>
        <UnderTittel>{`${artikkel.tittel}`}</UnderTittel>
        <SmallTittel>{`${artikkel.kategori}`}</SmallTittel>
        <Paragraf>{`${artikkel.beskrivelse}`}</Paragraf>
      </LinkWrapper>
    </Container>
  );
};
export default ArtikkelItem;
