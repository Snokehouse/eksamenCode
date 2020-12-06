import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArtikkel } from '../../../Utils/Artikkel.js';

import {
  Container,
  Tittel,
  UnderTittel,
  SmallTittel,
  KontorArticle,
  Paragraf,
} from './Style';

const Artikkel = () => {
  const [innLastetData, setInnLastetData] = useState([]);
  const { artikkelID } = useParams();
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
  }, [artikkelID]);
  return (
    <Container>
      <Tittel>{`${innLastetData.tittel}`}</Tittel>
      <KontorArticle>
        <SmallTittel>{`${innLastetData.dato}`}</SmallTittel>
        <SmallTittel>{`Skrevet av: ${innLastetData.forfatter}`}</SmallTittel>
        <Paragraf>{`${innLastetData.beskrivelse}`}</Paragraf>
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
      </KontorArticle>
    </Container>
  );
};

export default Artikkel;
