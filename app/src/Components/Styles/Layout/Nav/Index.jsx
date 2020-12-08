import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Break from 'react-break';

const StyledNav = styled.nav`
  font-family: Lato;
  width: 100%;
`;
const Logo = styled.p`
  margin: auto 10px;
  font-weight: bold;
`;

const NavMenu = styled.ul`
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

const NavMenuItem = styled.li`
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

const NavBreakpoints = {
  mobile: 0,
  tablet: 500,
  desktop: 800,
};

const Nav = () => (
  <>
    <Break
      breakpoints={NavBreakpoints}
      query={{ method: 'is', breakpoint: 'mobile' }}
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
          <NavMenuItem>
            <NavLink to="/login" activeClassName="active">
              Logg inn
            </NavLink>
          </NavMenuItem>
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
          <NavMenuItem>
            <NavLink to="/logginn" activeClassName="active">
              Logg inn
            </NavLink>
          </NavMenuItem>
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
          <NavMenuItem>
            <NavLink to="/logginn" activeClassName="active">
              Logg inn
            </NavLink>
          </NavMenuItem>
        </NavMenu>
      </StyledNav>
    </Break>
  </>
);

export default Nav;
