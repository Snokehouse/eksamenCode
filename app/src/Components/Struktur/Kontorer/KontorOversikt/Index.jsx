import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Tittel } from './Style';
import KontorData from './KontorData';

const Kontorer = () => {
  const [ListeVisning, setListeVisning] = useState(true);
  const [innLastetData, setInnLastetData] = useState([
    {
      id: 0,
      sted: 'Halden',
      kontaktInfo: [
        {
          ansattNr: 0,
          navn: 'test tester',
          adresse: 'Ola nordmanns gate 1',
          telefon: '69990000',
          email: 'test@tester.no',
        },
        {
          ansattNr: 1,
          navn: 'test tester3',
          adresse: 'Ola nordmanns gate 3',
          telefon: '69990000',
          email: 'test@tester3.no',
        },
      ],
    },
    {
      id: 1,
      sted: 'Fredrikstad',
      kontaktInfo: [
        {
          ansattNr: 0,
          navn: 'test tester2',
          adresse: 'Ola nordmanns gate 2',
          telefon: '69990000',
          email: 'test@tester2.no',
        },
      ],
    },
  ]);

  const { kontorerID } = useParams();
  useEffect(() => {
    const updateData = () => {
      if (kontorerID === undefined) {
        console.log('No Change');
      } else if (kontorerID !== undefined) {
        setInnLastetData();
        const lastetData = innLastetData.filter(
          (value) => value.sted === kontorerID
        );
        setInnLastetData(lastetData);
      }
    };
    updateData();
  }, [innLastetData, kontorerID]);
  return (
    <>
      <Tittel>Våre Kontorer</Tittel>
      <KontorData
        innLastetData={innLastetData}
        ListeVisning={ListeVisning}
        setListeVisning={setListeVisning}
      />
    </>
  );
};
export default Kontorer;
