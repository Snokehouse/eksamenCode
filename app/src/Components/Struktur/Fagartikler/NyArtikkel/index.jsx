import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { create } from '../../../Utils/Artikkel.js';
import { upload } from '../../../Utils/Image.js';
import { listKategori, lagKategori } from '../../../Utils/Kategori.js';
import { listForfatter } from '../../../Utils/Forfatter.js';

import {
  Wrapper,
  Tittel,
  ArtikkelForm,
  ArtikkelInput,
  ArtikkelLabel,
  ArtikkelArea,
  ArtikkelSelectK,
  ArtikkelSelectF,
  ArtikkelOption,
  ArtikkelButton,
  Nybutton,
} from './Style';
import Modal from './Modal';

const NyArtikkel = () => {
  const [file, setFile] = useState();
  const history = useHistory();
  const [modal, setModal] = useState(false);
  const [formdata, setFormdata] = useState([
    {
      tittel: '',
      dato: '',
      beskrivelse: '',
      innhold: '',
      kategori: '',
      forfatter: '',
      bildeID: '',
      hemmelig: '',
    },
  ]);
  // Forfatter
  const [forfatterData, setforfatterData] = useState([]);
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await listForfatter();
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setforfatterData(data.data);
      }
    };
    updateData();
  }, []);
  // Kategori
  const [modalData, setModalData] = useState([
    {
      modalValue: '',
    },
  ]);
  const [kategoriData, setkategoriData] = useState([]);
  const [updateRender, setUpdateRender] = useState(false);
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
  }, [updateRender]);

  const addKategori = async (value) => {
    const { data, error } = await lagKategori(value);
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      setUpdateRender(true);
      setModal(!modal);
    }
  };
  // Validere form
  const validateForm = () => {
    if (
      formdata.tittel !== undefined &&
      formdata.dato !== undefined &&
      formdata.beskrivelse !== undefined &&
      formdata.innhold !== undefined &&
      formdata.kategori !== undefined &&
      formdata.forfatter !== undefined &&
      file !== undefined
    ) {
      return true;
    }
    return false;
  };

  // Oppdater inputs
  const updateValue = (event) => {
    const inputValue = { [event.target.name]: event.target.value };
    setFormdata((prev) => ({
      ...prev,
      ...inputValue,
    }));
  };
  // sende data til api og lage data
  const createData = async () => {
    const { data, error } = await create(formdata);
    if (error) {
      console.log(error);
    } else {
      alert('Artikkel Registrert');
      history.push('/fagartikler');
    }
  };
  const lasteOppBilde = async () => {
    const { data, error } = await upload(file);
    if (error) {
      console.log(error);
    } else {
      formdata.bildeID = data.data._id;
      createData();
    }
  };
  // Submit form
  const submitHandle = (event) => {
    event.preventDefault();
    lasteOppBilde();
  };
  return (
    <>
      <Tittel>Ny Artikkel</Tittel>
      <Wrapper>
        <ArtikkelForm id="artikkelForm" onSubmit={submitHandle}>
          <ArtikkelLabel htmlFor="hemmelig">Åpen/Hemmelig: </ArtikkelLabel>
          <ArtikkelSelectF
            id="hemmelig"
            name="hemmelig"
            form="artikkelForm"
            value={formdata.hemmelig || ''}
            onChange={updateValue}
          >
            <ArtikkelOption value="false" hidden>
              Åpen/Hemmelig
            </ArtikkelOption>
            <ArtikkelOption value="false">Åpen</ArtikkelOption>
            <ArtikkelOption value="true">Hemmelig</ArtikkelOption>
          </ArtikkelSelectF>
          <ArtikkelLabel htmlFor="tittel">Tittel: </ArtikkelLabel>
          <ArtikkelInput
            id="tittel"
            name="tittel"
            type="text"
            value={formdata.tittel || ''}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="dato">Dato: </ArtikkelLabel>
          <ArtikkelInput
            id="dato"
            name="dato"
            type="date"
            value={formdata.dato || ''}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="beskrivelse">Beskrivelse: </ArtikkelLabel>
          <ArtikkelInput
            id="beskrivelse"
            name="beskrivelse"
            type="text"
            value={formdata.beskrivelse || ''}
            onChange={updateValue}
          />
          <ArtikkelLabel htmlFor="innhold">Innhold: </ArtikkelLabel>
          <ArtikkelArea
            form="artikkelForm"
            id="innhold"
            name="innhold"
            type="textArea"
            value={formdata.innhold || ''}
            onChange={updateValue}
          />

          <br />
          <ArtikkelLabel htmlFor="kategori">Kategori: </ArtikkelLabel>
          <br />
          <ArtikkelSelectK
            id="kategori"
            name="kategori"
            form="artikkelForm"
            value={formdata.kategori}
            onChange={updateValue}
          >
            <ArtikkelOption value="" hidden>
              Velg Kategori
            </ArtikkelOption>
            {kategoriData < 1 ? (
              <ArtikkelOption value={null}>
                Ingen kategorier funnet, lag en ny!
              </ArtikkelOption>
            ) : (
              kategoriData.map((kategori) => (
                <ArtikkelOption
                  key={`${kategori.kategori}`}
                  value={`${kategori.kategori}`}
                >{`${kategori.kategori}`}</ArtikkelOption>
              ))
            )}
          </ArtikkelSelectK>
          <Nybutton type="button" onClick={() => setModal(!modal)}>
            Ny
          </Nybutton>
          <br />
          <ArtikkelLabel htmlFor="forfatter">Forfatter: </ArtikkelLabel>
          <br />
          <ArtikkelSelectF
            id="forfatter"
            name="forfatter"
            form="artikkelForm"
            value={formdata.forfatter}
            onChange={updateValue}
          >
            <ArtikkelOption value="" hidden>
              Velg Forfatter
            </ArtikkelOption>
            {forfatterData < 1 ? (
              <ArtikkelOption value={null}>
                Ingen forfatter funnet!
              </ArtikkelOption>
            ) : (
              forfatterData.map((forfatter) => (
                <ArtikkelOption
                  key={`${forfatter.forfatter}`}
                  value={`${forfatter.forfatter}`}
                >{`${forfatter.forfatter}`}</ArtikkelOption>
              ))
            )}
          </ArtikkelSelectF>
          <ArtikkelLabel htmlFor="image">Last opp Bilde:</ArtikkelLabel>
          <ArtikkelInput
            type="file"
            id="image"
            name="image"
            accept=".gif, .jpg, .png, .jpeg"
            onChange={(event) => {
              const imageFile = event.target.files[0];
              setFile(imageFile);
            }}
          />
          {validateForm() ? (
            <ArtikkelButton type="submit" value="Submit">
              Create
            </ArtikkelButton>
          ) : (
            <ArtikkelButton disabled type="submit" value="Submit">
              Create
            </ArtikkelButton>
          )}
        </ArtikkelForm>
      </Wrapper>
      {modal && (
        <Modal
          addKategori={addKategori}
          setModal={setModal}
          modalData={modalData}
          setModalData={setModalData}
        />
      )}
    </>
  );
};

export default NyArtikkel;
