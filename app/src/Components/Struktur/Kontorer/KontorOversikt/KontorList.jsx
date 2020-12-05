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
  display: flex;
  justify-content: space-between;
  //grid-area: main;
  background-color: yellow;
  width: 100%;
`;
const Paragraf = styled.p`
  margin: 10px auto 10px auto;
  width: 100%;
  //background-color: purple;
  //grid-area: main;
`;

const KontorList = ({ kontor, kontaktInfo }) => {
  KontorList.propTypes = {
    kontor: PropTypes.object,
    kontaktInfo: PropTypes.array,
  };
  return (
    <>
      <UnderTittel>{`${kontor.sted} liste`}</UnderTittel>
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

export default KontorList;
