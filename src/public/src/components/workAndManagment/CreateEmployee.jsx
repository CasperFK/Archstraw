import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation, useTranslation } from 'react-i18next';

import { sendNewEmployess } from '../../../apiCalls';
import actions from '../../app/work/duck/actions';
import {
  WrapperForm,
  WrapperLabel,
  FieldTitle,
  FieldInput,
  Btn,
} from './styles/style';

const CreateEmployee = ({ handleChange, createEmployer, date }) => {
  const { t } = useTranslation();
  let history = useHistory();

  const now = new Date();

  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const [error, setError] = React.useState(false);
  const [form, setForm] = React.useState({
    name: '',
    surname: '',
    phoneNumber: '',
    startWork: currentTime,
    endWork: '',
    state: 0,
  });
  const handleClickAccept = async e => {
    const { name, surname, phoneNumber, startWork, endWork, state} = form;
    e.preventDefault();
    if(name !== '' && surname !== '') {
      const newEmployesId = await sendNewEmployess({
        name,
        surname,
        phoneNumber,
        startWork,
        endWork,
        state,
        date
      });

      if(newEmployesId) {
        createEmployer({
          id: newEmployesId,
          name,
          surname,
          phoneNumber,
          startWork,
          endWork,
          state,
        });
      }
    } else {
      setError(true);
      return;
    }
    history.push('/work/managment/');
  };
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/managment/');
  };
  return (
    <WrapperForm>
      {error ? <span style={{color: 'red', display: 'block'}}>{t('work.createEmployer.error')}</span> : null}
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.name')}</FieldTitle>
        <FieldInput
          name="name"
          value={form.name}
          onChange={e => handleChange(e, setForm, form)}
          type="text"
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.surname')}</FieldTitle>
        <FieldInput
          name="surname"
          value={form.surname}
          onChange={e => handleChange(e, setForm, form)}
          type="text"
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.phoneNumber')}</FieldTitle>
        <FieldInput
          name="phoneNumber"
          value={form.phoneNumber}
          onChange={e => handleChange(e, setForm, form)}
          type="number"
        />
      </WrapperLabel>
      <Btn onClick={handleClickAccept}>{t('work.createEmployer.confirm')}</Btn>
      <Btn onClick={handleClick}>{t('work.createEmployer.cancel')}</Btn>
    </WrapperForm>
  );
};

const mapDispatchToProps = dispatch => ({
  createEmployer: employer => dispatch(actions.addEmployer(employer)),
  addEmployer: employer => dispatch(actions.addEmployerToDay(employer))
});

const mapStateToProps = state => ({
  date: state.dayOfWork.date,
  listOfDays: state.dayOfWork.listOfDays,
});

CreateEmployee.propTypes = {
  handleChange: PropTypes.func,
  createEmployer: PropTypes.func,
  date: PropTypes.string,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(CreateEmployee));
