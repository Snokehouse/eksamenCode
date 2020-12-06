import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
`;
// Form Artikkel
export const ArtikkelForm = styled.form`
  margin: 0;
`;
export const ArtikkelInput = styled.input`
  margin: 0;
`;
export const ArtikkelLabel = styled.label`
  margin: 0;
`;
export const ArtikkelButton = styled.button`
  margin: 0;
`;
export const ArtikkelSelect = styled.select`
  margin: 0;
`;
export const ArtikkelOption = styled.option`
  margin: 0;
`;
export const Nybutton = styled.button`
  margin: 0;
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
  background-color: #4caf50;
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
