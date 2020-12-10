import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {
  getArtikkel,
  deleteArtikkel,
  updateArtikkel,
} from '../../../Utils/Artikkel.js';
import Modal from './Modal';
import {
  Container,
  TittelWrap,
  Tittel,
  UnderTittel,
  SmallTittel,
  KontorArticle,
  Paragraf,
  SlettKnapp,
  RedigerKnapp,
} from './Style';

import { useAuthContext } from '../../Context/AuthProvider';

const Artikkel = () => {
  const [modal, setModal] = useState(false);
  const history = useHistory();
  const [innLastetData, setInnLastetData] = useState([]);
  const { artikkelID } = useParams();
  const [updateRender, setUpdateRender] = useState(false);
  useEffect(() => {
    const updateData = async () => {
      const { data, error } = await getArtikkel(artikkelID);
      if (error) {
        console.log(`Error: ${error}`);
      } else {
        setInnLastetData(data);
      }
    };
    updateData();
  }, [artikkelID, updateRender]);
  // sjekke om det går ann å få tak i bilde for bakgrunn så sette det
  const finnesDetBakgrunn = () => {
    if (innLastetData.bildeID !== undefined) {
      return `url(http://localhost:5000/api/v1/image/${innLastetData.bildeID})`;
    }
    return 'url()';
  };
  // funksjon for slette og redigere

  const slettArtikkel = () => {
    if (confirm('Vil du slette artikkelen?')) {
      const sletteData = async () => {
        const { data, error } = await deleteArtikkel(artikkelID);
        if (error) {
          console.log(`Error: ${error}`);
        } else {
          history.push('/fagartikler');
        }
      };
      sletteData();
    }
  };
  const redigereSubmit = async () => {
    const { data, error } = await updateArtikkel(artikkelID, innLastetData);
    if (error) {
      console.log(`Error: ${error}`);
    } else {
      setUpdateRender(true);
      setModal(!modal);
    }
  };

  const { isLoggedIn, isAdmin } = useAuthContext();

  return (
    <Container>
      <TittelWrap background={finnesDetBakgrunn()}>
        <Tittel>{`${innLastetData.tittel}`}</Tittel>
      </TittelWrap>
      <KontorArticle>
        <SmallTittel className="datoTittel">{`${innLastetData.dato}`}</SmallTittel>
        <SmallTittel className="forfatterTittel">{`Skrevet av: ${innLastetData.forfatter}`}</SmallTittel>
        <Paragraf>{`${innLastetData.beskrivelse}`}</Paragraf>
        <UnderTittel>SubTitle</UnderTittel>
        <Paragraf>{`${innLastetData.innhold}`}</Paragraf>
        <UnderTittel>SubTitle</UnderTittel>
        <Paragraf>
          Lucas ipsum dolor sit amet veila dashade organa jettster airen
          antilles ansion neimoidia neimoidian nadon. K-3po kurtzen hutt
          geonosis auril. Skywalker dashade brak dantari artaru bormea. Darth
          dunwell kwi ortolan tib selonian ken. Bibble motti maul phlog
          nelvaanian axmis xizor barabel han. Toydarian fortuna wyl ooryl fode
          doldur. Galen xanatos fett keyan katarn jabba c-3po yoda billaba.
          Illum vos hutt hoth jamillia mccool zuggs shaddaa. Tarasin borvo
          ackbar rex neimoidian sebulba owen skywalker needa. Aparo spar emtrey
          er'kit lando lah. Vader yaddle calrissian selonian gran saffa rakata
          ruurian kor-uj. Nal whaladon neimoidian kit talz jan bith falleen
          quee. Tano ponda hutt medon t88 anakin farlander windu biggs. Gen'dai
          palpatine omas gado anakin ti jade.
        </Paragraf>
        <Paragraf>
          Sidious beru sly amedda elomin. Felth zabrak jarael ki-adi-mundi
          ortolan tharin dunwell. Thisspiasian c-3p0 sly neimoidia frozarns
          borvo ysanne besalisk leia. Lars deliah gado wilhuff marek mandell
          yavin. Nomi bel ongree veila gen'dai han jade. Shaak kessel ziro brak
          darth deliah klatooinian. Lah ugnaught fett brak skywalker haako yavin
          kaminoan jin'ha. Saurin y'bith ponda iridonian. Bimm polis evazan
          skywalker ubb yavin chazrach. Yuvernian massassi c-3po vaathkree
          antilles sebulba tono. Crynyd dormé dunwell cato ssi-ruuk rebo lah.
          Mara yavin solo vao soontir golda needa kushiban skirata. Ahsoka kota
          klivian tharen talz c-3p0 farlander rendar boltrunians. Wicket ord
          bossk elom soontir elomin.
        </Paragraf>
        <UnderTittel>SubTitle</UnderTittel>
        <Paragraf>
          Lucas ipsum dolor sit amet veila dashade organa jettster airen
          antilles ansion neimoidia neimoidian nadon. K-3po kurtzen hutt
          geonosis auril. Skywalker dashade brak dantari artaru bormea. Darth
          dunwell kwi ortolan tib selonian ken. Bibble motti maul phlog
          nelvaanian axmis xizor barabel han. Toydarian fortuna wyl ooryl fode
          doldur. Galen xanatos fett keyan katarn jabba c-3po yoda billaba.
          Illum vos hutt hoth jamillia mccool zuggs shaddaa. Tarasin borvo
          ackbar rex neimoidian sebulba owen skywalker needa. Aparo spar emtrey
          er'kit lando lah. Vader yaddle calrissian selonian gran saffa rakata
          ruurian kor-uj. Nal whaladon neimoidian kit talz jan bith falleen
          quee. Tano ponda hutt medon t88 anakin farlander windu biggs. Gen'dai
          palpatine omas gado anakin ti jade.
        </Paragraf>
        <SmallTittel>{`${innLastetData.kategori}`}</SmallTittel>
        {isLoggedIn && isAdmin && (
        <SlettKnapp disabled={false} onClick={slettArtikkel}>
          Slett
        </SlettKnapp>
        )}
        {isLoggedIn && isAdmin && (
        <RedigerKnapp disabled={false} onClick={() => setModal(!modal)}>
          Rediger
        </RedigerKnapp>
        )}
        
      </KontorArticle>
      {modal && (
        <Modal
          redigereSubmit={redigereSubmit}
          setModal={setModal}
          innLastetData={innLastetData}
          setInnLastetData={setInnLastetData}
        />
      )}
    </Container>
  );
};

export default Artikkel;
