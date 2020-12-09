import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
`;
export const TittelWrap = styled.div`
  margin: 0;
  background-image: ${(props) => props.background};
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
  padding: 10% 20%;
  text-align: center;
`;
export const UnderTittel = styled.h2`
  margin: 50px 0px 0px 0px;
`;
export const SmallTittel = styled.h4`
  margin: 10px 0px;
`;

// Artikkel elementer
export const KontorArticle = styled.article`
  margin: 0 auto;
  padding: 5% 20%;

  > .datoTittel {
    float: right;
  }

`;
export const Paragraf = styled.p`
  margin: 10px auto;
`;
export const SlettKnapp = styled.button`
  background-color: #b22222;
  color: white;
  padding: 14px 20px;
  margin: 10px 0px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :disabled {
    display: none;
  }
`;
export const RedigerKnapp = styled.button`
  background-color: #f4a460;
  color: white;
  padding: 14px 20px;
  margin: 10px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :disabled {
    display: none;
  }
`;
