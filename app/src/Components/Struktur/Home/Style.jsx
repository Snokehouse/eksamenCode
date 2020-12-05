import styled from 'styled-components';

export const Tittel = styled.h1`
  margin: 0;
  text-align: center;
  background-color: lightgrey;
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const Container = styled.section`
  margin-top: 20px;
  margin-bottom: 20px;
  margin: 20px auto 20px auto;
  display: grid;
  grid-template-columns: 30% 10% 30% 30%;
  grid-template-rows: auto;
  grid-template-areas: 

    "main . sidebar sidebar"
    "footer footer footer footer";

  width: 80%;
`;
export const HomeArticle = styled.article`
  margin: 10px auto 10px auto;
  background-color: lightgray;

  &:first-child {
    grid-area: main;
    width: 100%;
    height: 10px;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:nth-child(2) {
    grid-area: sidebar;
    width: 100%;
    max-height: 30%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:nth-child(3) {
    grid-area: footer;
    width: 100%;
    text-align: center;
    padding-top: 100px;
    padding-bottom: 100px;
  }

`;
export const Paragraph = styled.p`
  margin: 0 auto;
`;
