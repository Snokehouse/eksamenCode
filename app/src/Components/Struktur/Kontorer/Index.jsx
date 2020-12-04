import React, { useState } from 'react';

import { Tittel } from './Style';

import KontorData from './KontorData';

const Kontorer = () => {
  const [filter, setFilter] = useState(null);
  const [ListeVisning, setListeVisning] = useState(0);
  const [innLastetData, setInnLastetData] = useState({
    sted: 'test',
    kontaktInfo: [
      {
        navn: 'test tester',
        adresse: 'Ola nordmanns gate 1',
        telefon: '69990000',
        email: 'test@tester.no',
      },
    ],
  });

  return (
    <>
      <Tittel>Våre Kontorer</Tittel>
      <KontorData
        setFilter={setFilter}
        innLastetData={innLastetData}
        ListeVisning={ListeVisning}
        setListeVisning={setListeVisning}
      />
    </>
  );
};
export default Kontorer;
