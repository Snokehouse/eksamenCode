import React from 'react';
import {
  Container,
  Wrapper,
  Tittel,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginButton,
} from './Style.jsx';

const LoggInn = () => (
  <>
    <Container>
      <Tittel>Logg inn</Tittel>
      <Wrapper>
        <LoginForm>
          <LoginLabel>Email: </LoginLabel>
          <LoginInput />
          <LoginLabel>Passord: </LoginLabel>
          <LoginInput />
          <LoginButton>Logg Inn</LoginButton>
        </LoginForm>
      </Wrapper>
    </Container>
  </>
);

export default LoggInn;
