import React from 'react';
import { useDispatch } from 'react-redux';
import { withTranslation, useTranslation } from 'react-i18next';

import ErrorMessage from '../../common/components/ErrorMesage';
import actions from '../../../app/signIn/duck/actions';
import { sendLoginData } from '../../../apiCalls';
import Input from '../../common/components/Input';
import {
  PageTitle,
  LoginPart,
  FormContainer,
  Title,
} from '../style';
import Button from '../../common/components/Button';

const LoginForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const validate = (log) => {
    switch (log) {
      case 'email':
        return 'Zły login';
      case 'password':
        return 'Złe hasło';
      default:
        return null;
    }
  };

  const handleChange = (e, setForm, form) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.username) {
      const loginFailure = await sendLoginData(form);
      const message = validate(loginFailure.log);
      if (loginFailure.error) {
        setError(message);
        dispatch(actions.changeIncorrect());
      } else {
        dispatch(actions.changeCorrect());
      }
    } else {
      setError(validate('email'));
    }
  };

  return (
    <FormContainer>
      <Title>{t('title')}</Title>
      <PageTitle>{t('signInPanel.loginPanel')}</PageTitle>
      {error && <ErrorMessage text={error} />}
      <LoginPart>
        <Input
          name="username"
          value={form.username}
          type="text"
          handleChange={e => handleChange(e, setForm, form)}
          placeholder="login"
        />
      </LoginPart>
      <LoginPart>
        <Input
          name="password"
          value={form.password}
          type="password"
          handleChange={e => handleChange(e, setForm, form)}
          placeholder="hasło"
        />
      </LoginPart>
      <Button handleClick={handleSubmit} login text={t('signInPanel.accept')} />
    </FormContainer>
  );
};

export default withTranslation()(LoginForm);
