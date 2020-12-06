import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 50%;
  max-width: 900px;
  text-align: center;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: grey;
`;
// Form Artikkel
export const ArtikkelForm = styled.form`
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
`;
export const ArtikkelInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const ArtikkelLabel = styled.label`
  margin: 0;
`;
export const ArtikkelButton = styled.button`
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const ArtikkelSelect = styled.select`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const ArtikkelOption = styled.option`
  margin: 0;
`;
export const Nybutton = styled.button`
  width: 20%;
  background-color: #4caf50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
