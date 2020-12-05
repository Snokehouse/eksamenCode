import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
`;
const UnderTittel = styled.h2`
  margin: 0;
`;

const KontorArticle = styled.article`
  margin: 0 auto;
`;
const Paragraf = styled.p`
  margin: 0 auto;
`;

const KontorCard = ({ kontor, kontaktInfo }) => {
  KontorCard.propTypes = {
    kontor: PropTypes.object,
    kontaktInfo: PropTypes.array,
  };
  return (
    <>
      <UnderTittel>{`${kontor.sted} card`}</UnderTittel>
      <Container>
        {kontaktInfo.map((value) => (
          <KontorArticle key={`${value.ansattNr}${kontor.sted}`}>
            <Paragraf key={value.ansattNr}>{`${value.ansattNr}`}</Paragraf>
            <Paragraf
              key={value.navn}
            >{`${value.navn} ${value.ansattNr}`}</Paragraf>
            <Paragraf
              key={value.adresse}
            >{`${value.adresse} ${value.ansattNr}`}</Paragraf>
            <Paragraf key={value.telefon}>{`${value.telefon}`}</Paragraf>
            <Paragraf key={value.email}>{`${value.email}`}</Paragraf>
          </KontorArticle>
        ))}
      </Container>
    </>
  );
};
export default KontorCard;
