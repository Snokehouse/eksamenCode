import styled from 'styled-components';

// nav meny
export const StyledNav = styled.nav`
  font-family: Lato;
  width: 100%;
`;
export const Logo = styled.p`
  margin: auto 10px;
  font-weight: bold;
`;

export const NavMenu = styled.ul`
  display: grid;
  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
  }

  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: space-between;
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: 5fr 1fr 1fr 1fr 1fr 2fr;
  }
  @media screen and (min-width: 1050px) {
    grid-template-columns: 10fr 1fr 1fr 1fr 1fr 2fr;
  }
  margin: 0;
  padding: 0px;
  list-style: none;
`;

export const NavMenuItem = styled.li`
  padding: 0 20px;

  text-align: center;

  &:first-child {
    padding-left: 0;
    //color: red;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0px;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }

  &:last-child {
    background-color: #007b5f;

    & > a {
      color: white;

      &.active {
        color: yellow;
        border-bottom: 4px solid yellow;
      }
    }
  }
`;

// Nav Burgermeny
export const BurgerTopNav = styled.div`
  overflow: hidden;
  //background-color: #333;
  position: relative;
  //margin: 0;
`;
export const BurgerLinks = styled.ul`
  display: ${(props) => props.display};
  padding: 0;
  margin:0;
`;
export const BurgerLInkItem = styled.li`
  //color: white;
  margin: 0 auto;
  padding: 14px 0px;
  font-size: 17px;
  display: block;
  text-align:center;
  background-color: #333;
  //width: 100%;
  & > a {
    color:white;
    text-decoration: none;
    width: 100%;
    //height:100%;
    //padding: 14px 0px;
    display:block;
  }
  & :hover {
    background-color:#4caf50;
    color: black;
  }
`;
export const BurgerLogo = styled.p`
  margin: auto 0;
  padding: 25px;
  height: 40px;
  width: 100%;
`;
export const BurgerIcon = styled.button`
  display: block;
  position: absolute;
  color: white;
  background-color: #4caf50;
  font-size: 20px;
  padding: 12.5px 15px;
  border: 0;
  right: 0;
  top: 0;
`;
