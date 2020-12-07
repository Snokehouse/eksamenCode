import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  LinkWrapper,
  Paragraf,
  UnderTittel,
  SmallTittel,
  ImageStyle,
  ArtikkelWrapper,
} from './Style';

const ArtikkelItem = ({ artikkel }) => {
  ArtikkelItem.propTypes = {
    artikkel: PropTypes.object,
  };
  return (
    <LinkWrapper href={`/fagartikkel/${artikkel._id}`}>
      <Container>
        <ImageStyle
          src={`http://localhost:5000/api/v1/image/${artikkel.bildeID}`}
          alt={`Bilde til Artikkelen ${artikkel.tittel}`}
        />
        <ArtikkelWrapper>
          <UnderTittel>{`${artikkel.tittel}`}</UnderTittel>
          <SmallTittel>{`${artikkel.kategori}`}</SmallTittel>
          <Paragraf>{`${artikkel.beskrivelse}`}</Paragraf>
        </ArtikkelWrapper>
      </Container>
    </LinkWrapper>
  );
};
export default ArtikkelItem;
