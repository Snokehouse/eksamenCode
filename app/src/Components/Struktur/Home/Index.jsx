import React from 'react';
import { Container, Paragraph, HomeArticle } from './Style';

const Home = () => (
  <Container>
    <Container>
      <Paragraph>Her er det tekst!</Paragraph>
    </Container>
    <Container>
      <HomeArticle>
        <Paragraph>Her er det tekst!</Paragraph>
      </HomeArticle>
      <HomeArticle>
        <Paragraph>Her er det tekst!</Paragraph>
      </HomeArticle>
      <HomeArticle>
        <Paragraph>Her er det tekst!</Paragraph>
      </HomeArticle>
    </Container>
  </Container>
);

export default Home;
