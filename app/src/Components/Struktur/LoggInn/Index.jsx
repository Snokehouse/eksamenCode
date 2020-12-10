import React, { useEffect, useState } from 'react';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  //Button,
  CloseButton,
  //Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import {
  // Container,
  // Wrapper,
  Tittel,
  // LoginForm,
  LoginInput,
  // LoginLabel,
  LoginButton,
  RegistrerButton,
} from './Style.jsx';
import { login, registrerBruker } from '../../Utils/AuthService.js';
import { useAuthContext } from '../Context/AuthProvider.jsx';

const LoggInn = () => {
  const [registrere, setRegistrere] = useState(false);

  const [closeBtnState, setCloseBtnState] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { setUser, isLoggedIn } = useAuthContext();
  const history = useHistory();
  const { state } = useLocation();

  const { register, errors, handleSubmit, formState } = useForm({
    mode: 'onBlur',
  });

  useEffect(() => {
    if (isLoggedIn && state) {
      history.push(state?.from.pathname);
    }
  }, [isLoggedIn, state]);

  const onSubmit = async (credentials) => {
    if (registrere) {
      const { data } = await registrerBruker(credentials);
      if (!data.success) {
        setCloseBtnState(true);
        setError(data.message);
      } else {
        const user = data?.user;
        const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
        setUser({ ...user, expire });
        setSuccess(true);
        history.push('/');
      }
    } else {
      const { data } = await login(credentials);
      if (!data.success) {
        setCloseBtnState(true);
        setError(data.message);
      } else {
        const user = data?.user;
        const expire = JSON.parse(window.atob(data.token.split('.')[1])).exp;
        setUser({ ...user, expire });
        setSuccess(true);
        history.push('/');
      }
    }
  };
  return (
    <>
      {registrere ? (
        <>
          <Tittel>Registrere Bruker</Tittel>
          <Box
            w="500px"
            margin="20px auto"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {success && (
              <Alert status="success">
                <AlertIcon />
                Du er logget inn. Omdirigerer til forsiden ...
              </Alert>
            )}
            {error && closeBtnState && (
              <Alert
                color="red"
                padding="20px"
                margin="30px auto"
                mr={3}
                status="error"
              >
                {error &&
                  Array.isArray(error) &&
                  error.map((err) => (
                    <AlertTitle mr={2}>{err.message}</AlertTitle>
                  ))}
                {error && !Array.isArray(error) && (
                  <AlertTitle mr={2}>{error}</AlertTitle>
                )}
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setCloseBtnState(false)}
                />
              </Alert>
            )}
            <FormControl isInvalid={errors.name}>
              <FormLabel htmlFor="name">Navn: </FormLabel>
              <LoginInput
                id="name"
                placeholder="Navn"
                name="name"
                type="name"
                ref={register({
                  required: true,
                })}
              />
              <FormErrorMessage valid={!errors.email}>
                Fyll ut Navn
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email: </FormLabel>
              <LoginInput
                id="email"
                placeholder="Epost"
                name="email"
                type="email"
                ref={register({
                  required: true,
                })}
              />
              <FormErrorMessage valid={!errors.email}>
                Fyll ut e-mail
              </FormErrorMessage>
            </FormControl>

            <FormControl margin="25px 0" isInvalid={errors.password}>
              <FormLabel htmlFor="password">Passord: </FormLabel>
              <LoginInput
                type="password"
                name="password"
                id="password"
                placeholder="Passord"
                ref={register({
                  required: true,
                  minLength: 3,
                })}
              />
              <FormErrorMessage valid={!errors.password}>
                Passord må fylles ut og bestå av 3 tall/bokstaver
              </FormErrorMessage>
            </FormControl>

            <LoginButton isLoading={formState.isSubmitting} type="submit">
              Registrer Bruker
            </LoginButton>
          </Box>
        </>
      ) : (
        <>
          <Tittel>Logg inn</Tittel>
          <Box
            w="500px"
            margin="20px auto"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            {success && (
              <Alert status="success">
                <AlertIcon />
                Du er logget inn. Omdirigerer til forsiden ...
              </Alert>
            )}
            {error && closeBtnState && (
              <Alert
                color="red"
                padding="20px"
                margin="30px auto"
                mr={3}
                status="error"
              >
                {error &&
                  Array.isArray(error) &&
                  error.map((err) => (
                    <AlertTitle mr={2}>{err.message}</AlertTitle>
                  ))}
                {error && !Array.isArray(error) && (
                  <AlertTitle mr={2}>{error}</AlertTitle>
                )}
                <CloseButton
                  position="absolute"
                  right="8px"
                  top="8px"
                  onClick={() => setCloseBtnState(false)}
                />
              </Alert>
            )}

            <FormControl isInvalid={errors.email}>
              <FormLabel htmlFor="email">Email: </FormLabel>
              <LoginInput
                id="email"
                placeholder="Epost"
                name="email"
                type="email"
                ref={register({
                  required: true,
                })}
              />
              <FormErrorMessage valid={!errors.email}>
                Fyll ut e-mail
              </FormErrorMessage>
            </FormControl>

            <FormControl margin="25px 0" isInvalid={errors.password}>
              <FormLabel htmlFor="password">Passord: </FormLabel>
              <LoginInput
                type="password"
                name="password"
                id="password"
                placeholder="Passord"
                ref={register({
                  required: true,
                  minLength: 3,
                })}
              />
              <FormErrorMessage valid={!errors.password}>
                Passord må fylles ut og bestå av 3 tall/bokstaver
              </FormErrorMessage>
            </FormControl>

            <LoginButton isLoading={formState.isSubmitting} type="submit">
              Logg Inn
            </LoginButton>
          </Box>
          <RegistrerButton onClick={() => setRegistrere(!registrere)}>
            Ingen bruker? Registrer en Bruker
          </RegistrerButton>
        </>
      )}
    </>
  );
};

export default LoggInn;
