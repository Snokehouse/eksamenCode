import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { list } from '../../../Utils/Artikkel.js';
import { Tittel } from '../../Home/Style.jsx';

import ArtikkelItem from './ArtikkelItem';
import {
  Container,
  Linkbtn,
  SokeFelt,
  Paragraf,
  Dropdown,
  DropdownContent,
  DropdownItem,
  Dropdownbtn,
} from './Style';

import { useAuthContext } from '../../Context/AuthProvider';
import { logout } from '../../../Utils/AuthService';

const Fagartikler = () => {
  const [innLastetData, setInnLastetData] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await list();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setInnLastetData(data);
      }
    };
    updateData();
  }, []);
  const handleChange = () => {
    console.log('fagartikkel');
  };

  //Sjekker om bruker er logget inn som admin
  const { isLoggedIn, setUser } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <>
      <Tittel>Artikkel Oversikt</Tittel>
      <Container>
        <Container className="MenyItems">
        {isLoggedIn && (
          <Linkbtn onClick={() => history.push('/fagartikler/new')}>
            Ny Artikkel
          </Linkbtn>
        )}
          <SokeFelt
            id="sokTxt"
            name="sokTxt"
            placeholder="Søk"
            type="text"
            onChange={handleChange}
          />
          <Dropdown>
            <Dropdownbtn>Filter</Dropdownbtn>
            <DropdownContent>
              <DropdownItem href="#">Link 1</DropdownItem>
              <DropdownItem href="#">Link 2</DropdownItem>
              <DropdownItem href="#">Link 3</DropdownItem>
            </DropdownContent>
          </Dropdown>
        </Container>
        <Container>
          {innLastetData < 1 ? (
            <Paragraf>Fant ingen artikler å vise.</Paragraf>
          ) : (
            innLastetData.map((artikkel) => (
              <ArtikkelItem key={artikkel._id} artikkel={artikkel} />
            ))
          )}
        </Container>
      </Container>
    </>
  );
};

export default Fagartikler;
