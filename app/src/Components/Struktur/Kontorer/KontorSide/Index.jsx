import React from 'react';
import { useParams } from 'react-router-dom';

const KontorSide = () => {
  console.log('KontorSide');
  const { kontorID } = useParams();
  return (
    <>
      <h1>KontorSide</h1>
      <p>Kontoret er {`${kontorID}`}</p>
    </>
  );
};
export default KontorSide;
