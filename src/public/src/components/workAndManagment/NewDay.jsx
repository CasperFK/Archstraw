import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

import { sendNewDay } from '../../../apiCalls';
import actions from '../../app/work/duck/actions';
import {
  Title,
  AddEmployer,
  Container,
  FormContainer,
  FieldInput
} from './styles/style';

const NewDay = ({ createDay }) => {
  const { t } = useTranslation();

  const now = new Date();

  const date = `${now.getDate()}/${
    now.getMonth() < 10 ? `0${now.getMonth()}` : now.getMonth()
  }/${now.getFullYear()}`;

  const history = useHistory();

  const [form, setForm] = React.useState({
    date,
    ratio: 0,
  });
  const [error, setError] = React.useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.date !== '' && form.ratio !== 0) {
      await sendNewDay({
        ...form,
        employess: [],
      });
      createDay(form);
      setForm({
        ...form,
        date: '',
        ratio: 0,
      });
    } else {
      setError(true);
      return;
    }
    history.push('/work/managment');
  };

  return (
    <FormContainer>
      <Title>
        <span>{t('work.newDay.data')}</span>
        <p>{date}</p>
      </Title>
      <Container flex>
        <span>{t('work.newDay.ratioTitle')}</span>
        {error ? <span style={{color: 'red', display: 'block'}}>{t('work.newDay.error')}</span> : null}
        <FieldInput
          name="ratio"
          value={form.ratio}
          type="number"
          onChange={handleChange}
        />
      </Container>
      <AddEmployer fullWidth onClick={handleSubmit} type="submit">
        {t('work.newDay.create')}
      </AddEmployer>
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createDay: (value) => dispatch(actions.createDay(value)),
});

NewDay.propTypes = {
  createDay: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(withTranslation()(NewDay));
