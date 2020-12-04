import React, { useState } from 'react';

import { Tittel } from './Style';

import KontorData from './KontorData';

const Kontorer = () => {
  const [filter, setFilter] = useState(null);
  const [ListeVisning, setListeVisning] = useState(true);
  const [innLastetData, setInnLastetData] = useState([
    {
      sted: 'Halden',
      kontaktInfo: [
        {
          navn: 'test tester',
          adresse: 'Ola nordmanns gate 1',
          telefon: '69990000',
          email: 'test@tester.no',
        },
      ],
    },
    {
      sted: 'Fredrikstad',
      kontaktInfo: [
        {
          navn: 'test tester2',
          adresse: 'Ola nordmanns gate 2',
          telefon: '69990000',
          email: 'test@tester2.no',
        },
      ],
    },
  ]);

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
