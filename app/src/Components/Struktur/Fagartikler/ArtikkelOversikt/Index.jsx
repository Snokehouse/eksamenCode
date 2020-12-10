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
  PagButton,
} from './Style';

import { useAuthContext } from '../../Context/AuthProvider';

const Fagartikler = () => {
  // Sjekker om bruker er logget inn som admin
  const { isLoggedIn, isAdmin } = useAuthContext();

  const [innLastetData, setInnLastetData] = useState([]);
  const [dataInfo, setDataInfo] = useState([]);
  const history = useHistory();
  const [kategoriData, setkategoriData] = useState([]);
  const [updateRender, setUpdateRender] = useState(false);
  const [queryStr, setQueryStr] = useState({
    page: '',
    q: '',
    kategori: '',
  });
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await list(queryStr);
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setDataInfo(data);
        if (!isLoggedIn) {
          setInnLastetData(
            data.data.filter((value) => value.hemmelig === false)
          );
        } else {
          setInnLastetData(data.data);
        }
        setUpdateRender(false);
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
  const handleChange = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setQueryStr((prev) => ({
      ...prev,
      ...inputValue,
    }));
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

  // paginering
  const pagesInfo = [];
  for (let i = 1; i <= dataInfo.totalPages; i++) {
    pagesInfo.push(i);
  }
  const updatePage = (page) => {
    queryStr.page = page;
    setUpdateRender(true);
  };
  return (
    <>
      <Tittel>Artikkel Oversikt</Tittel>
      <Container>
        <Container className="MenyItems">
          {isLoggedIn && isAdmin && (
            <Linkbtn onClick={() => history.push('/fagartikler/new')}>
              Ny Artikkel
            </Linkbtn>
          )}
          <SokeFelt
            id="sokTxt"
            name="q"
            placeholder="Søk"
            type="text"
            value={queryStr.q}
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
        {pagesInfo.map((page) => (
          <PagButton
            type="button"
            key={page}
            onClick={() => updatePage(page)}
          >{`${page}`}</PagButton>
        ))}
      </Container>
    </>
  );
};

export default Fagartikler;
