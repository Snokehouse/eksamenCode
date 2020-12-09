import React, { useEffect, useState } from 'react';
/* import {
  Container,
  Wrapper,
  Tittel,
  LoginForm,
  LoginInput,
  LoginLabel,
  LoginButton,
} from './Style.jsx'; */

import {
  Alert,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import { login } from '../../Utils/AuthService.js';
import { useAuthContext } from '../Context/AuthProvider.jsx';

const LoggInn = () => {
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
    let mounted = true;
    if (isLoggedIn && state) {
      if (mounted) {
      history.push(state?.from.pathname);
      console.log("banan");
    }
    };
    return () => {mounted = false};
  }, [isLoggedIn, state]);

  const onSubmit = async (credentials) => {
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
  };

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        {success && (
          <Alert status="success">
            <AlertIcon />
            Du er logget inn. Omdirigerer til forsiden ...
          </Alert>
        )}
        {error && closeBtnState && (
          <Alert mb={4} status="error">
            <AlertIcon />
            {error &&
              Array.isArray(error) &&
              error.map((err) => (
                <AlertTitle mr={2}>
                  {err.field && <span>{err.field}</span>} {err.message}
                </AlertTitle>
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
          <Input
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
          <Input
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

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={formState.isSubmitting}
          type="submit"
        >
          Logg Inn
        </Button>

      </Box>
    </>
  );
};

export default LoggInn;
