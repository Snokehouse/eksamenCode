import React from 'react';
import { useParams } from 'react-router-dom';

import {
  Container,
  CardWrapper,
  DummyWrapper,
  Tittel,
  UnderTittel,
  ExitTittel,
  KontorArticle,
  Paragraf,
} from './Style';

const KontorSide = () => {
  const { kontorID } = useParams();
  const kontorVerdier = kontorID.split('&');
  const hvormangedummydata = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    <>
      <Tittel>Kontoret Rørlegger {`${kontorVerdier[1]}`}</Tittel>
      <Container>
        <UnderTittel>
          Velkommen til Rørlegger {`${kontorVerdier[1]},  ${kontorVerdier[0]}.`}
        </UnderTittel>
        <Paragraf>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet
        </Paragraf>
        <KontorArticle>
          <UnderTittel>Våre Ansatte</UnderTittel>
          {hvormangedummydata.map((id) => (
            <CardWrapper key={id}>
              <DummyWrapper />
              <Paragraf>Ansatt Ansattnavn Stilling</Paragraf>
            </CardWrapper>
          ))}
        </KontorArticle>
        <ExitTittel>Kontakt oss på 69 99 00 00</ExitTittel>
      </Container>
    </>
  );
};
export default KontorSide;
