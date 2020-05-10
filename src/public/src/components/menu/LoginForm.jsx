import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import ErrorMessage from './ErrorMesage';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import { sendLoginData } from '../../../apiCalls';
import Input from '../common/components/Input';
import {
  PageTitle,
  LoginPart,
  FormContainer,
  Title,
} from './styles/style';
import Button from '../common/components/Button';

const LoginForm = ({ changeCorrect, changeIncorrect, handleChange, validate }) => {
  const { t } = useTranslation();

  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    username: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.username) {
      const loginFailure = await sendLoginData(form);
      const message = validate(loginFailure.log);
      if (loginFailure.error) {
        setError(message);
        changeIncorrect();
      } else {
        changeCorrect();
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

LoginForm.propTypes = {
  changeCorrect: PropTypes.func.isRequired,
  changeIncorrect: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  validate: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  changeCorrect: () => dispatch(actions.changeCorrect()),
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
});

export default connect(null, mapDispatchToProps)(withTranslation()(LoginForm));
