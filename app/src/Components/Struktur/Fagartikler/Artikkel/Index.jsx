import React from 'react';

import {
  Container,
  Linkbtn,
  SokeFelt,
  Dropdown,
  DropdownContent,
  DropdownItem,
  Dropdownbtn,
} from './Style';

const Fagartikler = () => {
  const handleChange = () => {
    console.log('fagartikkel');
  };
  return (
    <Container>
      <Linkbtn href="#/new">Ny Artikkel</Linkbtn>
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
  );
};

export default Fagartikler;
