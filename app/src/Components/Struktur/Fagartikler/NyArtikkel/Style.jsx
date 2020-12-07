import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
`;
export const Wrapper = styled.section`
  margin: 20px auto;
  width: 50%;
  max-width: 900px;
  text-align: center;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
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
  padding: 10px;
`;
export const ArtikkelButton = styled.button`
  float: right;
  background-color: #007b5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :disabled {
    background-color: grey;
  }
`;
export const ArtikkelSelectK = styled.select`
  width: 80%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const ArtikkelSelectF = styled.select`
  width: 100%;
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
  background-color: #007b5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
// Modal
export const ModalContainer = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const ModalWrapper = styled.section`
  width: 350px;
  box-shadow: 0px 1px 8px #00000029;
  border-radius: 8px;
  background: #fff;
`;
export const ModalHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 1.7rem 2rem;
  border-bottom: 1px solid #f1f1f1;
`;
export const ModalUnderTittel = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-size: 1.4rem;
`;
export const ModalButton = styled.button`
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
