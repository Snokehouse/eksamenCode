import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Break from 'react-break';

const StyledNav = styled.nav`
  font-family: Lato;
  width: 100%;
`;

const NavMenu = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const NavMenuItem = styled.li`
  padding: 0 20px;

  &:first-child {
    padding-left: 0;
  }

  & > a {
    color: #333;
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 3.456;
    padding: 5px 0;
    text-decoration: none;

    &.active {
      color: #007b5f;
      border-bottom: 4px solid #007b5f;
    }
  }
`;

const NavBreakpoints = {
  mobile: 0,
  tablet: 500,
  desktop: 800,
};

const Nav = () => (
  <Break
    breakpoints={NavBreakpoints}
    query={{ method: 'is', breakpoint: 'desktop' }}
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
      </NavMenu>
    </StyledNav>
  </Break>
);

export default Nav;
