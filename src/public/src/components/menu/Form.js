import React from 'react';
import ErrorMessage from './ErrorMesage';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import {
  PageTitle,
  StyledForm,
  LoginPart,
  LoginInputTitle,
  SubmitBtn,
  DataInput,
} from './styles/style';

const Form = ({ changeCorrect, changeIncorrect, handleChange, validate }) => {
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    login: '',
    password: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    fetch('./data.json')
      .then(response => response.json())
      .then(response => {
        const errorMsg = validate(
          form,
          response.admin.login,
          response.admin.pass,
        );
        if (errorMsg) {
          setError(errorMsg);
          changeIncorrect();
        } else if (errorMsg === null) {
          changeCorrect();
        }
      });
    fetch('http://localhost:3000/api/auth/sign-in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/js',
      },
      body: form,
    })
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

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
          onChange={e => handleChange(e, setForm, form)}
          placeholder="login"
        />
      </LoginPart>
      <LoginPart>
        <LoginInputTitle>Hasło:</LoginInputTitle>
        <DataInput
          name="password"
          value={form.password}
          type="password"
          onChange={e => handleChange(e, setForm, form)}
          placeholder="hasło"
        />
      </LoginPart>
      <SubmitBtn onClick={handleSubmit}>zaloguj</SubmitBtn>
    </StyledForm>
  );
};

const mapDispatchToProps = dispatch => ({
  changeCorrect: () => dispatch(actions.changeCorrect()),
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
});

export default connect(null, mapDispatchToProps)(Form);
