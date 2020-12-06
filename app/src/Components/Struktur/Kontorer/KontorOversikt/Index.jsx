import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { list } from '../../../Utils/Kontorer.js';

import { Tittel } from './Style';
import KontorData from './KontorData';

const Kontorer = () => {
  const [ListeVisning, setListeVisning] = useState(true);
  const [innLastetData, setInnLastetData] = useState([]);

  const { kontorerID } = useParams();
  useEffect(() => {
    const updateData = async () => {
      let { lastetData, error } = await list();
      if (error) {
        console.log(error);
      } else if (kontorerID === undefined) {
        setInnLastetData(lastetData);
      } else if (kontorerID !== undefined) {
        setInnLastetData();
        lastetData = innLastetData.filter((value) => value.sted === kontorerID);
        setInnLastetData(lastetData);
      }
    };
    updateData();
  }, [innLastetData, kontorerID]);
  console.log(innLastetData);
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
