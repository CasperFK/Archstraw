import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const WrapperForm = styled.form`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WrapperLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

const FieldTitle = styled.span`
  display:block;
  text-align: center;
  padding: 3px 0;
`;

const FieldInput = styled.input`
  width: 70%;
  margin: 2px 5px;
  padding: 3px;
`;

const Btn = styled.button`
  width: 130px;
  margin-bottom: 5px;
  padding: 5px 0;
  background-color: #ffffff;
  border: 1px solid black;
`;

const Create = () => {
  let history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/managment/');
  }
  return (
    <WrapperForm>
      <WrapperLabel>
        <FieldTitle>Imie</FieldTitle>
        <FieldInput type="text" />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>Nazwisko</FieldTitle>
        <FieldInput type="text" />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>Telefon</FieldTitle>
        <FieldInput type="number" />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>Czas rozpoczęcia pracy</FieldTitle>
        <FieldInput type="text" />
      </WrapperLabel>
      <Btn onClick={handleClick}>Zatwierdź</Btn>
      <Btn onClick={handleClick}>Anuluj</Btn>
    </WrapperForm>
  )
}

export default Create;