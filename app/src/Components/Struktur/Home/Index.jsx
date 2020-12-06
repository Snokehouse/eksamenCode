import React from 'react';
import { Tittel, Container, Paragraph, HomeArticle } from './Style.jsx';

const Home = () => (
  <>
    <Tittel>Velkommen til FG Rørleggerservice AS</Tittel>
    <Container>
      <HomeArticle>
        <Paragraph>Kontorer</Paragraph>
      </HomeArticle>
      <HomeArticle>
        <Paragraph>Kontakt</Paragraph>
      </HomeArticle>
      <HomeArticle>
        <Paragraph>Se våre fagartikler om oppussing av bad</Paragraph>
      </HomeArticle>
    </Container>
  </>
);

export default Home;
