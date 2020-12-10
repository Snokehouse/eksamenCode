import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Break from 'react-break';
import { FaBars } from 'react-icons/fa';
import { useAuthContext } from '../../../Struktur/Context/AuthProvider';
import { logout } from '../../../Utils/AuthService';

import {
  Logo,
  StyledNav,
  NavMenu,
  NavMenuItem,
  BurgerTopNav,
  BurgerLinks,
  BurgerLInkItem,
  BurgerLogo,
  BurgerIcon,
} from './Style';

const NavBreakpoints = {
  mobile: 0,
  tablet: 500,
  desktop: 800,
};

const Nav = () => {
  const { isLoggedIn, setUser } = useAuthContext();
  const handleLogout = async () => {
    await logout();
    setUser(null);
  };
  const [burgerMeny, setBurgerMeny] = useState(false);
  return (
    <>
      <Break
        breakpoints={NavBreakpoints}
        query={{ method: 'is', breakpoint: 'mobile' }}
      >
        <StyledNav>
          <BurgerTopNav>
            <BurgerLogo>LG</BurgerLogo>
            <BurgerLinks display={burgerMeny ? 'block' : 'none'}>
              <BurgerLInkItem>
                <NavLink exact to="/home" activeClassName="active">
                  Home
                </NavLink>
              </BurgerLInkItem>
              <BurgerLInkItem>
                <NavLink to="/kontorer" activeClassName="active">
                  Kontorer
                </NavLink>
              </BurgerLInkItem>
              <BurgerLInkItem>
                <NavLink to="/fagartikler" activeClassName="active">
                  Fagartikler
                </NavLink>
              </BurgerLInkItem>
              <BurgerLInkItem>
                <NavLink to="/kontakt" activeClassName="active">
                  Kontakt
                </NavLink>
              </BurgerLInkItem>
              {!isLoggedIn && (
                <BurgerLInkItem style={{ marginLeft: 'auto' }}>
                  <NavLink exact to="/login" activeClassName="active">
                    Logg inn
                  </NavLink>
                </BurgerLInkItem>
              )}
              {isLoggedIn && (
                <BurgerLInkItem style={{ marginLeft: 'auto' }}>
                  <NavLink exact to="/" onClick={handleLogout}>
                    Logg ut
                  </NavLink>
                </BurgerLInkItem>
              )}
            </BurgerLinks>
            <BurgerIcon onClick={() => setBurgerMeny(!burgerMeny)}>
              <FaBars />
            </BurgerIcon>
          </BurgerTopNav>
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
