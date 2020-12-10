import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 5%;
  background-color: #f5f5f5;
  text-align: center;
`;
export const SkjemaWrapper = styled.section`
  margin: 0;
  padding: 5%;
  background-color: white;
  & * {
    padding: 2%;
  }
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
`;
export const UnderTittel = styled.h2`
  margin: 50px 0px 0px 0px;
`;
export const Paragraf = styled.p`
  margin: 10px auto;
`;
