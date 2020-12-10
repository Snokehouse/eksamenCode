import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Break from 'react-break';
import { FaBars } from 'react-icons/fa';
import { useAuthContext } from '../../../Struktur/Context/AuthProvider';
import { logout } from '../../../Utils/AuthService';

const StyledNav = styled.nav`
  font-family: Lato;
  width: 100%;
  @media screen and (max-width: 500px) {
    //grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    overflow: hidden;
    //background-color: #333;
    position: relative;
  }
`;
const Logo = styled.p`
  margin: auto 10px;
  font-weight: bold;
`;

const NavMenu = styled.ul`
  display: grid;
  @media screen and (max-width: 500px) {
    //grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    //height: 62px;
    //padding: 25px;
    display: none;

    #BurgerKnapp {
      color: black;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
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

const NavMenuItem = styled.li`
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    //grid-template-columns: 1fr 1fr 1fr 1fr 2fr;
    //height: 62px;
    //padding: 25px;
    display: block;
    color: white;
  }

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

const NavBreakpoints = {
  mobile: 0,
  tablet: 500,
  desktop: 800,
};

const displayNav = () => {
  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
};

const Nav = () => {
  const { isLoggedIn, setUser } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <>
      <Break
        breakpoints={NavBreakpoints}
        query={{ method: 'is', breakpoint: 'mobile' }}
      >
        <StyledNav>
          <NavMenu id="myLinks" onClick={displayNav}>
            <NavMenuItem>
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontorer" activeClassName="active">
                Kontorer
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/fagartikler" activeClassName="active">
                Fagartikler
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontakt" activeClassName="active">
                Kontakt
              </NavLink>
            </NavMenuItem>
            {!isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/login" activeClassName="active">
                  Logg inn
                </NavLink>
              </NavMenuItem>
            )}
            {isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/" onClick={handleLogout}>
                  Logg ut
                </NavLink>
              </NavMenuItem>
            )}
            <FaBars
              id="BurgerKnapp"
              href="javascript:void(0);"
              onClick={() => myFunction()}
            >
              List
            </FaBars>
          </NavMenu>
        </StyledNav>
      </Break>
      <Break
        breakpoints={NavBreakpoints}
        query={{ method: 'is', breakpoint: 'tablet' }}
      >
        <StyledNav>
          <NavMenu>
            <NavMenuItem>
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontorer" activeClassName="active">
                Kontorer
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/fagartikler" activeClassName="active">
                Fagartikler
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontakt" activeClassName="active">
                Kontakt
              </NavLink>
            </NavMenuItem>
            {!isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/login" activeClassName="active">
                  Logg inn
                </NavLink>
              </NavMenuItem>
            )}
            {isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/" onClick={handleLogout}>
                  Logg ut
                </NavLink>
              </NavMenuItem>
            )}
          </NavMenu>
        </StyledNav>
      </Break>
      <Break
        breakpoints={NavBreakpoints}
        query={{ method: 'is', breakpoint: 'desktop' }}
      >
        <StyledNav>
          <NavMenu>
            <Logo>LG</Logo>
            <NavMenuItem>
              <NavLink exact to="/home" activeClassName="active">
                Home
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontorer" activeClassName="active">
                Kontorer
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/fagartikler" activeClassName="active">
                Fagartikler
              </NavLink>
            </NavMenuItem>
            <NavMenuItem>
              <NavLink to="/kontakt" activeClassName="active">
                Kontakt
              </NavLink>
            </NavMenuItem>
            {!isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/login" activeClassName="active">
                  Logg inn
                </NavLink>
              </NavMenuItem>
            )}
            {isLoggedIn && (
              <NavMenuItem style={{ marginLeft: 'auto' }}>
                <NavLink exact to="/" onClick={handleLogout}>
                  Logg ut
                </NavLink>
              </NavMenuItem>
            )}
          </NavMenu>
        </StyledNav>
      </Break>
    </>
  );
};

export default Nav;
