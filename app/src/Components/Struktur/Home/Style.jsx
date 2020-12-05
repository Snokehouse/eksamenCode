import styled from 'styled-components';

export const Tittel = styled.h1`
  margin: 0;
`;
export const Container = styled.section`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: auto;
  grid-template-areas: 

    "main . sidebar sidebar"
    "footer footer footer footer";

  
  margin: 0 auto;
  width: 100%;
  background-color: pink;
`;
export const HomeArticle = styled.article`
  margin: 0 auto;
  background-color: grey;

  &:first-child {
    grid-area: main;
    color: green;
  }

  &:nth-child(2) {
      grid-area: sidebar;
      color:yellow;
  }

  &:nth-child(3) {
      grid-area: footer;
  }

`;
export const Paragraph = styled.p`
  margin: 0 auto;
`;
