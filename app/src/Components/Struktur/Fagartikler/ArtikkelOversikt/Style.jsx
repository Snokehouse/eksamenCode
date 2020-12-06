import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 20px;
  width: 100%;

  & .MenyItems {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr auto 1.5fr 1fr;
  }
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0;
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
export const Linkbtn = styled.a`
  margin: 0 auto;
  padding: 20px 5px;
  width: 65px;
  height: 55px;
  background-color: green;
  text-align: center;
  color: black;
  font-weight: bold;
  font-size: 1.031rem;

  & :link,
  :visited {
    text-decoration: none;
  }
  & :hover {
    background-color: darkgreen;
  }
`;
// link-wrapper
export const LinkWrapper = styled.a`
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
  margin: 0 auto;
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
