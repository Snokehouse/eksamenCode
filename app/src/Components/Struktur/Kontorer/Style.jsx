import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
  text-align: center;
  background-color: lightgrey;
  padding-top: 100px;
  padding-bottom: 100px;
`;
export const UnderTittel = styled.h2`
  margin: 0;
  grid-area: title;
`;
// Artikkel elementer
export const KontorArticle = styled.article`
  margin: 0 auto;
  background-color: grey;
  grid-area: main;
`;
export const Paragraf = styled.p`
  margin: 0 auto;
`;
// Knapper
export const KnappListe = styled.button`
  margin: 0;
  grid-area: buttons;
`;
export const KnappCard = styled.button`
  margin: 0;
`;
// Dropdown
export const Dropdown = styled.section`
  position: relative;
  display: inline-block;
`;
export const Dropdownbtn = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
export const DropdownContent = styled.section`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
`;
export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
`;