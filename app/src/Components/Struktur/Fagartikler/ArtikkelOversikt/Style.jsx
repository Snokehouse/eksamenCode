import styled from 'styled-components';

export const Container = styled.section`
  margin: 0px auto;
  padding: 5% 5%;
  max-width: 90%;
  width: 100%;

  & .MenyItems {
    margin: 20px 0px 0px 0px;
    padding: 0% 15%;
    width: 100%;
    display: grid;
    grid-template-columns: 8fr 1fr 1fr;
  }
`;
export const ArtikkelWrapper = styled.section`
  text-align: center;
  padding: 15px;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
`;
// image
export const ImageStyle = styled.img`
  max-width: 125px;
  height: auto;
  border-radius: 8px;
  float: left;
`;

export const UnderTittel = styled.h2`
  margin: 0;
`;
export const SmallTittel = styled.p`
  margin: 0;
`;

// Artikkel elementer
export const KontorArticle = styled.article`
  margin: 0 auto;
  background-color: grey;
`;
export const Paragraf = styled.p`
  margin: 0 auto;
`;
// Link
export const Linkbtn = styled.button`
  margin: auto 0px;
  background-color: #4caf50;
  color: white;
  max-width: 100px;
  width: 100px;
  padding: 16px;
  font-size: 14px;
  border: none;
  cursor: pointer;

  & :hover {
    background-color: #3e8e41;
  }
`;
// link-wrapper
export const LinkWrapper = styled.div`
  margin: 0;
  color: black;

  & :link,
  :visited {
    text-decoration: none;
  }
  & :hover ${Container} {
    background-color: darkgrey;
  }
`;
// Søkefelt
export const SokeFelt = styled.input`
  margin: 0px 5px;
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
  margin: auto 0px;
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
  cursor: pointer;

  & :hover {
    background-color: #f1f1f1;
  }
`;

export const PagButton = styled.button`
  border: 0;
  margin: 5px;
  color: black;
  background-color: lightgray;
  float:right;
  font-size: 15px;

  &:focus {
    outline: 0;
    background-color: black;
    color: white;
  }
`;