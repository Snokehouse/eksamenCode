import React from 'react';
import { Container, Filter, KnappCard, KnappListe } from './Style';

const KontorData = () => (
  // hmm
  <>
    <Container>
      <Filter>Filter</Filter>
      <KnappListe>List</KnappListe>
      <KnappCard>Card</KnappCard>
    </Container>
    <Container>
      {/* pollData.length < 1 ? (
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

export default KontorData;
