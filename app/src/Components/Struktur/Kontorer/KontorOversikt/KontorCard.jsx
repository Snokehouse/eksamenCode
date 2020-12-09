import React from 'react';
import { useHistory } from 'react-router-dom';

import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;

const UnderTittel = styled.h2`
  margin: 0;
`;

const KontorArticle = styled.a`
  margin: 10px 10px;
  border: 1px solid black;
  padding: 15px;

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
  margin: 0 auto;
`;

const KontorCard = ({ kontor, kontaktInfo }) => {
  KontorCard.propTypes = {
    kontor: PropTypes.object,
    kontaktInfo: PropTypes.array,
  };
  const history = useHistory();
  return (
    <>
      <UnderTittel>{`${kontor.sted} card`}</UnderTittel>
      <Container>
        {kontaktInfo.map((value) => (
          <KontorArticle
            key={`${value.ansattNr}${kontor.sted}`}
            onClick={() =>
              history.push(`/kontor/${kontor.sted}&${value.ansattNr}`)
            }
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
export default KontorCard;
