import React from 'react';
import { Container, Filter, KnappCard, KnappListe } from './Style';

import KontorList from './KontorList';
import KontorCard from './KontorCard';

const KontorData = ({
  setFilter,
  innLastetData,
  ListeVisning,
  setListeVisning,
}) => {
  console.log('filter kommer senere');
  console.log(ListeVisning);
  if (ListeVisning) {
    return (
      <>
        <Container>
          <Filter>Filter</Filter>
          <KnappListe onClick={() => setListeVisning(true)}>List</KnappListe>
          <KnappCard onClick={() => setListeVisning(false)}>Card</KnappCard>
        </Container>
        <Container>
          {innLastetData.length < 1 ? (
            <p>404 Finner ingen data.</p>
          ) : (
            innLastetData.map((kontor) => (
              <KontorList
                key={kontor.id}
                kontor={kontor}
                kontaktInfo={kontor.kontaktInfo}
              />
            ))
          )}
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Filter>Filter</Filter>
        <KnappListe onClick={() => setListeVisning(true)}>List</KnappListe>
        <KnappCard onClick={() => setListeVisning(false)}>Card</KnappCard>
      </Container>
      <Container>
        {innLastetData.length < 1 ? (
          <p>404 Finner ingen data.</p>
        ) : (
          innLastetData.map((kontor) => (
            <KontorCard
              key={kontor.id}
              kontor={kontor}
              kontaktInfo={kontor.kontaktInfo}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default KontorData;
