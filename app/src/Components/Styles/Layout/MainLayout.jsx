import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { Container } from '../Styled';

import Nav from './Nav/Index';
import Footer from './Footer/Index';

const MainLayoutContainer = styled.div`
  padding-bottom: 20px;
  min-height: 100%;
  background-color: #fff;
`;

const StyledHeader = styled.header`
  background: #fff;
  box-shadow: 1px 1px 2px #f5f5f5;
  margin-bottom: 60px;
  width: 100%;
  padding: 0 2rem;
`;

const MainLayout = ({ children }) => {
  MainLayout.propTypes = {
    children: PropTypes.string,
  };
  return (
    <MainLayoutContainer>
      <StyledHeader>
        <Nav />
      </StyledHeader>
      <Container>{children}</Container>
      <Footer />
    </MainLayoutContainer>
  );
};

export default MainLayout;
