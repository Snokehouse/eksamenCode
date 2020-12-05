import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  KnappContainer,
  KnappCard,
  KnappListe,
  Dropdown,
  Dropdownbtn,
  DropdownContent,
  DropdownItem,
} from './Style';

import KontorList from './KontorList';
import KontorCard from './KontorCard';

const KontorData = ({
  setFilter,
  innLastetData,
  ListeVisning,
  setListeVisning,
}) => {
  KontorData.propTypes = {
    setFilter: PropTypes.func,
    innLastetData: PropTypes.array,
    ListeVisning: PropTypes.bool,
    setListeVisning: PropTypes.func,
  };
  console.log('filter kommer senere');
  console.log(ListeVisning);
  if (ListeVisning) {
    return (
      <>
        <Container>
          <KnappContainer>
            <Dropdown>
              <Dropdownbtn id = "hamburgerbutton">Dropdown</Dropdownbtn>
              <DropdownContent id="jsnav" class="nav hidden">
                <DropdownItem href="#">Link 1</DropdownItem>
                <DropdownItem href="#">Link 2</DropdownItem>
                <DropdownItem href="#">Link 3</DropdownItem>
              </DropdownContent>
            </Dropdown>
            <KnappListe onClick={() => setListeVisning(true)}>List</KnappListe>
            <KnappCard onClick={() => setListeVisning(false)}>Card</KnappCard>
          </KnappContainer>
        </Container>
        <Container>
          {innLastetData.length < 1 ? (
            <p>404 Finner ingen data.</p>
          ) : (
            innLastetData.map((kontor) => (
              <KontorList
                key={kontor.id}
                kontor={kontor}
                kontaktInfo={kontor.kontaktInfo}
              />
            ))
          )}
        </Container>
      </>
    );
  }
  return (
    <>
      <script>
        {document.getElementById("hamburgerbutton").addEventListener("click", clickykode)} 
        {function clickykode() {
            document.getElementById("jsnav").classList.toggle("hidden");
        }}
      </script>
      <Container>
        <Dropdown>
          <Dropdownbtn>Dropdown</Dropdownbtn>
          <DropdownContent>
            <DropdownItem href="#">Link 1</DropdownItem>
            <DropdownItem href="#">Link 2</DropdownItem>
            <DropdownItem href="#">Link 3</DropdownItem>
          </DropdownContent>
        </Dropdown>
        <KnappListe onClick={() => setListeVisning(true)}>List</KnappListe>
        <KnappCard onClick={() => setListeVisning(false)}>Card</KnappCard>
      </Container>
      <Container>
        {innLastetData.length < 1 ? (
          <p>404 Finner ingen data.</p>
        ) : (
          innLastetData.map((kontor) => (
            <KontorCard
              key={kontor.id}
              kontor={kontor}
              kontaktInfo={kontor.kontaktInfo}
            />
          ))
        )}
      </Container>
    </>
  );
};

export default KontorData;
