import React from 'react';
import { FaBars, FaThLarge } from 'react-icons/fa';

import { useParams } from 'react-router-dom';

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
  const { kontorerID } = useParams();
  let dataValues = innLastetData;
  if (kontorerID !== undefined) {
    dataValues = innLastetData.filter((value) => value.sted === kontorerID);
  }
  console.log('Here comes data');
  console.log(innLastetData);
  console.log(dataValues);

  if (ListeVisning) {
    return (
      <>
        <Container>
          <KnappContainer>
            <Dropdown>
              <Dropdownbtn>Filter</Dropdownbtn>
              <DropdownContent>
                <DropdownItem href="/kontorer">Fjern Filter</DropdownItem>
                {dataValues.length < 1 ? (
                  <DropdownItem href="/kontorer">Mangler data</DropdownItem>
                ) : (
                  dataValues.map((kontor) => (
                    <DropdownItem
                      key={kontor.id}
                      href={`/kontorer/${kontor.sted}`}
                    >{`${kontor.sted}`}</DropdownItem>
                  ))
                )}
              </DropdownContent>
            </Dropdown>
            <KnappListe>
              <FaBars onClick={() => setListeVisning(true)}>List</FaBars>
            </KnappListe>
            <KnappCard>
              <FaThLarge onClick={() => setListeVisning(false)}>Card</FaThLarge>
            </KnappCard>
          </KnappContainer>
        </Container>
        <Container>
          {dataValues.length < 1 ? (
            <p>404 Finner ingen data.</p>
          ) : (
            dataValues.map((kontor) => (
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
        <KnappContainer>
          <Dropdown>
            <Dropdownbtn>Filter</Dropdownbtn>
            <DropdownContent>
              <DropdownItem href="/kontorer">Fjern Filter</DropdownItem>
              {dataValues.length < 1 ? (
                <DropdownItem href="/kontorer">Mangler data</DropdownItem>
              ) : (
                dataValues.map((kontor) => (
                  <DropdownItem
                    key={kontor.id}
                    href={`/kontorer/${kontor.sted}`}
                  >{`${kontor.sted}`}</DropdownItem>
                ))
              )}
            </DropdownContent>
          </Dropdown>
          <KnappListe>
            <FaBars onClick={() => setListeVisning(true)}>List</FaBars>
          </KnappListe>
          <KnappCard>
            <FaThLarge onClick={() => setListeVisning(false)}>Card</FaThLarge>
          </KnappCard>
        </KnappContainer>
      </Container>
      <Container>
        {dataValues.length < 1 ? (
          <p>404 Finner ingen data.</p>
        ) : (
          dataValues.map((kontor) => (
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
