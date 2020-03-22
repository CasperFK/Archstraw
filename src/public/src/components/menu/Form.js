import React from 'react';
import ErrorMessage from './ErrorMesage';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import styled from 'styled-components';

const PageTitle = styled.h1`
  height: 50px;
  text-align: center;
  font-size: 25px;
`;

const StyledForm = styled.form`
  font-family: arial;
  height: 90vh;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginPart = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 15px 0;
  height: 30px;
  line-height: 30px;
`;

const LoginInputTitle = styled.span`
  display: block;
  margin-right: 5px;
`;

const SubmitBtn = styled.button`
  height: 35px;
  width: 150px;
  border: 1px solid black;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    transition: .3s;
    background-color: #ffddff;
  }
`;

const DataInput = styled.input`
padding-left: 3px;
  width: 250px;
`;

const Form = (props) => {
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    login: '',
    password: ''
  });

  const { changeCorrect, changeIncorrect, handleChange, validate } = props;

  const handleSubmit = e => {
    e.preventDefault();
    fetch("./data.json")
      .then(response => response.json())
      .then(response => {
        const errorMsg = validate(form, response.admin.login, response.admin.pass);
        if (errorMsg) {
          setError(errorMsg)
          changeIncorrect();
        }
        else if (errorMsg === null) {
          changeCorrect();
        }
      });
  }

  return (
    <StyledForm>
      <PageTitle>Panel logowania</PageTitle>
      {error && <ErrorMessage text={error} />}
      <LoginPart>
        <LoginInputTitle>Login:</LoginInputTitle>
        <DataInput
          name="login"
          value={form.login}
          type="text"
          onChange={(e) => handleChange(e, setForm, form)}
          placeholder="login" />
      </LoginPart>
      <LoginPart>
        <LoginInputTitle>Hasło:</LoginInputTitle>
        <DataInput
          name="password"
          value={form.password}
          type="password"
          onChange={(e) => handleChange(e, setForm, form)}
          placeholder="hasło" />
      </LoginPart>
      <SubmitBtn onClick={handleSubmit}>zaloguj</SubmitBtn>
    </StyledForm>
  )
}

const mapDispatchToProps = dispatch => ({
  changeCorrect: () => dispatch(actions.changeCorrect()),
  changeIncorrect: () => dispatch(actions.changeIncorrect())
});

export default connect(null, mapDispatchToProps)(Form);