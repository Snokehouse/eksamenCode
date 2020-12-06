import React, { useState, useEffect }from 'react';

import { list } from '../../../Utils/Artikkel.js';

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

const Fagartikler = () => {
  const [innLastetData, setInnLastetData] = useState([]);

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
  return (
    <Container>
      <Container className="MenyItems">
        <Linkbtn href="/fagartikler/new">Ny Artikkel</Linkbtn>
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
            <ArtikkelItem key={artikkel.tittel} artikkel={artikkel} />
          ))
        )}
      </Container>
    </Container>
  );
};

export default Fagartikler;
