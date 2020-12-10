import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
`;
export const Wrapper = styled.section`
  margin: 20px auto;
  width: 50%;
  max-width: 900px;
  text-align: center;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
`;
// Form
export const LoginForm = styled.form`
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
`;
export const LoginInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const LoginLabel = styled.label`
  margin: 0;
  padding: 10px;
`;
export const LoginButton = styled.button`
  float: right;
  background-color: #007b5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :disabled {
    background-color: grey;
  }
`;
export const RegistrerButton = styled.button`
  background-color: #007b5f;
  color: white;
  padding: 14px 20px;
  margin: 8px 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  & :disabled {
    background-color: grey;
  }
`;
