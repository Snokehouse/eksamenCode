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

const KontorArticle = styled.a`
  margin: 0 auto;
  padding: 5px;
  display: flex;
  justify-content: space-between;
  width: 100%;

  color: black;
  & :link,
  :visited {
    text-decoration: none;
  }
  & :hover {
    background-color: #c0c0c0;
  }
`;
const Paragraf = styled.p`
  margin: 10px auto 10px auto;
  width: 100%;
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
          <KontorArticle
            key={`${value.ansattNr}${kontor.sted}`}
            href={`/kontor/${kontor.sted}&${value.ansattNr}`}
          >
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
