import React from 'react';
import { Container, Tittel, Filter, KnappListe, KnappCard } from './Style';

const Kontorer = () => (
  // hmm
  <>
    <Tittel>Våre Kontorer</Tittel>
    <Container>
      <Filter>Filter</Filter>
      <KnappListe>List</KnappListe>
      <KnappCard>Card</KnappCard>
    </Container>
    <Container>
      {
        // sjekke hvilken liste som skal genereres (List eller Card)
        // så sjekke om det er noe data, vis ikke generere statisk tekst
        //
        //
        /* pollData.length < 1 ? (
        <p>Ingen polls idag :(</p>
      ) : (
        pollData.map((
          poll // sette id til poll setId(data[0]._id);
        ) => (
          <PollForm
            key={poll.sporsmal}
            submitHandle={submitHandle}
            svarData={svarData}
            updateValue={updateValue}
            poll={poll}
          />
        ))
        ) */}
    </Container>
  </>
);
export default Kontorer;
