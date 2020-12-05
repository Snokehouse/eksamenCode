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
          <KnappContainer>
            <Dropdown>
              <Dropdownbtn>Filter</Dropdownbtn>
              <DropdownContent>
                <DropdownItem href="/kontorer">Fjern Filter</DropdownItem>
                {innLastetData.length < 1 ? (
                  <DropdownItem href="/kontorer">Mangler data</DropdownItem>
                ) : (
                  innLastetData.map((kontor) => (
                    <DropdownItem
                      key={kontor.id}
                      href={`/kontorer/${kontor.sted}`}
                    >{`${kontor.sted}`}</DropdownItem>
                  ))
                )}
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
      <Container>
        <Dropdown>
          <Dropdownbtn>Filter</Dropdownbtn>
          <DropdownContent>
            {innLastetData.length < 1 ? (
              <DropdownItem href="#">Mangler data</DropdownItem>
            ) : (
              innLastetData.map((kontor) => (
                <DropdownItem
                  key={kontor.id}
                  href={`/kontorer/${kontor.sted}`}
                >{`${kontor.sted}`}</DropdownItem>
              ))
            )}
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
