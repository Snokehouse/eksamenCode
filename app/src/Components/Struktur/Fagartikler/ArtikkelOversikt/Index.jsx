import React, { useState } from 'react';

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
  const [innLastetData, setInnLastetData] = useState([
    {
      id: 0,
      forfatter: 'Random0',
      dato: '01-01-2020',
      tittel: 'Katten ville være hund!',
      kategori: 'Katter',
      beskrivelse:
        'Det var en gang en liten søt katt. Den lekte og tøyset hele dagen lang og skulle ønske den var hund. Dette var grunnen til at hunden ikke ville være katt.',
      bilde: './img/',
    },
    {
      id: 1,
      forfatter: 'Random1',
      dato: '01-01-2020',
      tittel: 'Hunden ville ikke være katt!',
      kategori: 'Hunder',
      beskrivelse:
        'Det var en gang en liten søt katt. Den lekte og tøyset hele dagen lang og skulle ønske den var hund. Dette var grunnen til at hunden ikke ville være katt.',
      bilde: './img/',
    },
  ]);
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
