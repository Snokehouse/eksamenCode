import React, { useState, useEffect } from 'react';

import { list } from '../../../Utils/Kontorer.js';

import { Tittel } from './Style';
import KontorData from './KontorData';

const Kontorer = () => {
  const [ListeVisning, setListeVisning] = useState(true);
  const [innLastetData, setInnLastetData] = useState([]);

  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await list();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setInnLastetData(data.data);
      }
    };
    updateData();
  }, []);
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
