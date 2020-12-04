import React from 'react';
import styled from 'styled-components';
import { Container } from '../../Styles/Styled';
import Nav from '../Nav/Index';

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

const MainLayout = ({ children }) => (
  <MainLayoutContainer>
    <StyledHeader>
      <Nav />
    </StyledHeader>
    <Container>{children}</Container>
  </MainLayoutContainer>
);

export default MainLayout;
