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
    <LinkWrapper href={`/fagartikkel/${artikkel._id}`}>
      <Container>
        <UnderTittel>{`${artikkel.tittel}`}</UnderTittel>
        <SmallTittel>{`${artikkel.kategori}`}</SmallTittel>
        <Paragraf>{`${artikkel.beskrivelse}`}</Paragraf>
      </Container>
    </LinkWrapper>
  );
};
export default ArtikkelItem;
