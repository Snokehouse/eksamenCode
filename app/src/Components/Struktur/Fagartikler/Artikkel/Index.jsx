import React from 'react';
import { useParams } from 'react-router-dom';

const Artikkel = () => {
  console.log('KontorSide');
  const { artikkelID } = useParams();
  return (
    <>
      <h1>Artikkelside</h1>
      <p>Atrikkelen du leter etter er {`${artikkelID}`}</p>
    </>
  );
};

export default Artikkel;
