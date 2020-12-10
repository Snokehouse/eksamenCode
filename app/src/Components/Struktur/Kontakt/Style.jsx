import styled from 'styled-components';

export const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  padding: 5%;
  background-color: #f5f5f5;
  text-align: center;
`;
export const FormWrapper = styled.section`
  margin: 0;
  padding: 10%;
  background-color: white;
`;
// Overskrifter
export const Tittel = styled.h1`
  margin: 0 auto;
  padding: 10% 20%;
  text-align: center;
  background-color: lightgray;
`;
export const UnderTittel = styled.h2`
  margin: 0;
  padding: 20px;
`;
// Form Artikkel
export const KontaktForm = styled.form`
  margin: 0 auto;
  text-align: left;
  font-size: 14px;
`;
export const KontaktInput = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const KontaktLabel = styled.label`
  margin: 0;
  padding: 10px;
`;
export const KontaktArea = styled.textarea`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
export const KontaktButton = styled.button`
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
export const AdminButton = styled.button`
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
