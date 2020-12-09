import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { listKategori } from '../../../Utils/Kategori.js';

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

const Fagartikler = () => {
  const [innLastetData, setInnLastetData] = useState([]);
  const history = useHistory();
  const [kategoriData, setkategoriData] = useState([]);
  const [updateRender, setUpdateRender] = useState(false);
  const [queryStr] = useState([
    {
      limit: '',
      page: '',
      q: '',
      kategori: '',
    },
  ]);
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await list(queryStr);
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setInnLastetData(data.data);
      }
    };
    updateData();
  }, [queryStr, updateRender]);

  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await listKategori();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setkategoriData(data);
      }
    };
    updateData();
  }, []);
  const handleChange = () => {
    console.log('fagartikkel');
  };
  const filterArtikler = (value) => {
    if (value !== undefined) {
      queryStr.kategori = value;
      setUpdateRender(true);
    } else {
      queryStr.kategori = '';
      setUpdateRender(true);
    }
  };

  // Sjekker om bruker er logget inn som admin
  const { isLoggedIn } = useAuthContext();

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
              <DropdownItem onClick={() => filterArtikler()}>
                Fjern Filter
              </DropdownItem>
              {kategoriData.length < 1 ? (
                <DropdownItem>Mangler data</DropdownItem>
              ) : (
                kategoriData.map((kategori) => (
                  <DropdownItem
                    key={kategori._id}
                    onClick={() => filterArtikler(kategori.kategori)}
                  >{`${kategori.kategori}`}</DropdownItem>
                ))
              )}
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
