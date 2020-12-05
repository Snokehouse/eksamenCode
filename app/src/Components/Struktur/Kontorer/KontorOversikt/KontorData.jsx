import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  KnappCard,
  KnappListe,
  Dropdown,
  Dropdownbtn,
  DropdownContent,
  DropdownItem,
} from './Style';

import KontorList from './KontorList';
import KontorCard from './KontorCard';

const KontorData = ({ innLastetData, ListeVisning, setListeVisning }) => {
  KontorData.propTypes = {
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
          <Dropdown>
            <Dropdownbtn>Dropdown</Dropdownbtn>
            <DropdownContent>
              <DropdownItem href="#/id">Link 1</DropdownItem>
              <DropdownItem href="#/id">Link 2</DropdownItem>
              <DropdownItem href="#/id">Link 3</DropdownItem>
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
      <Container>
        <Dropdown>
          <Dropdownbtn>Dropdown</Dropdownbtn>
          <DropdownContent>
            <DropdownItem href="#/id">Link 1</DropdownItem>
            <DropdownItem href="#/id">Link 2</DropdownItem>
            <DropdownItem href="#/id">Link 3</DropdownItem>
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
