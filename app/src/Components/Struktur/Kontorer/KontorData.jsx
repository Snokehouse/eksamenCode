import React from 'react';
import { Container, Filter, KnappCard, KnappListe } from './Style';

import KontorList from './KontorList';
import KontorCard from './KontorCard';

const KontorData = (
  setFilter,
  innLastetData,
  ListeVisning,
  setlisteVisning
) => (
  <>
    <Container>
      <Filter>Filter</Filter>
      <KnappListe>List</KnappListe>
      <KnappCard>Card</KnappCard>
    </Container>
    <Container>
      {/* innLastetData.length < 1 && ListeVisning ? (
        <p>404 Finner ingen data.</p>
      ) : (
        innLastetData.map((kontor) => (
          <KontorList key={kontor.kontaktInfo.navn} kontor={kontor} />
        ))
        ) */}
      {/* innLastetData.length < 1 && !ListeVisning ? (
        <p>404 Finner ingen data.</p>
      ) : (
        innLastetData.map((kontor) => (
          <KontorCard key={kontor.kontaktInfo.navn} kontor={kontor} />
        ))
        ) */}
    </Container>
  </>
);

export default KontorData;
