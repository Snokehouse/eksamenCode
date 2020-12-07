import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  padding: 0px 0px 20px 0px;
  width: 100%;

  & .MenyItems {
    margin: 20px 0px 0px 0px;
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;
// Overskrifter
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
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
  margin: 0px 5px;
  padding: 20px 5px;
  width: 65px;
  height: 55px;
  background-color: #007b5f;
  text-align: center;
  color: white;
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

  & :hover {
    background-color: #f1f1f1;
  }
`;
