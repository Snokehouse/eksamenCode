import styled from 'styled-components';

export const Container = styled.section`
  margin: 20px auto;
  width: 90%;
  //background-color: black;
`;
export const Wrapper = styled.section`
  margin: 10px auto 50px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
`;
export const CardWrapper = styled.section`
  margin: 10px 10px;
  //background-color:red;
`;
export const DummyWrapper = styled.section`
  margin: 0;
  background-color: #c0c0c0;
  width: 100%;
  height: 100px;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
  text-align: center;
  background-color: lightgrey;
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const UnderTittel = styled.h2`
  margin: 50px 0px 10px 0px;
`;
export const ExitTittel = styled.h2`
  margin: 0;
  text-align: center;
  background-color: lightgrey;
  padding-top: 100px;
  padding-bottom: 100px;
`;
// Artikkel elementer
export const KontorArticle = styled.article`
  margin: 0 auto;
  width: 100%;
`;
export const Paragraf = styled.p`
  margin: 0 auto;
  width: 100%;
`;
