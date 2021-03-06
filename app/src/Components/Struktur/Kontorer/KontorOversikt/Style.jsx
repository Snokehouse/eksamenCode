import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  //background-color: black;
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
`;
// Artikkel elementer
export const KontorArticle = styled.article`
  margin: 0 auto;
  background-color: grey;
  width: 100%;
`;
export const Paragraf = styled.p`
  margin: 0 auto;
  width: 100%;
`;
// Knapper
export const KnappContainer = styled.section`
  margin: 20px auto auto auto;
  display: flex;
  justify-content: flex-end;
`;

export const KnappListe = styled.button`
  margin: auto 5px auto 5px;
  padding: 10px;
  font-size: 20px;
  color: black;
  border: none;
  background-color: white;

  &:focus {
    outline: 0;
    color: #007b5f;
  }
`;
export const KnappCard = styled.button`
  margin: auto 5px auto 5px;
  padding: 10px;
  font-size: 20px;
  color: black;
  border: none;
  background-color: white;

  &:focus {
    outline: 0;
    color: #007b5f;
  }
`;
// Dropdown
export const DropdownContent = styled.section`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
export const Dropdownbtn = styled.button`
  background-color: #007b5f;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
`;
export const Dropdown = styled.section`
  position: relative;
  display: inline-block;
  margin: 0px 5px 0px 5px;

  & :hover ${DropdownContent} {
    display: Block;
  }
  & :hover ${Dropdownbtn} {
    background-color: #3e8e41;
  }
`;
export const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  & :hover {
    background-color: #f1f1f1;
  }
`;
