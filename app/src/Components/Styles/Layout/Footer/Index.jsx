import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  text-align: center;
`;
const FooterItem = styled.p`
  margin: 0;
`;

const Footer = () => (
  <FooterSection>
    <FooterItem>OrgNr: 007 007 007</FooterItem>
    <FooterItem>lg@lgror.no</FooterItem>
    <FooterItem>99 00 00 00</FooterItem>
  </FooterSection>
);

export default Footer;
