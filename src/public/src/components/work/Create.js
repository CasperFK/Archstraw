import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  WrapperForm,
  WrapperLabel,
  FieldTitle,
  FieldInput,
  Btn,
} from './styles/style';
import actions from '../../app/work/duck/actions';
import { withTranslation, useTranslation } from 'react-i18next';

const Create = ({ handleChange, ratio, createEmployer, date, addEmployer, listOfDays }) => {
  const { t } = useTranslation();
  let history = useHistory();
  const [form, setForm] = React.useState({
    name: '',
    surname: '',
    phoneNumber: '',
    startWork: date,
    state: 0,
    actualRatio: ratio,
  });
  const checkCurrentDayAndSearchingDay = () => {
    const data = [...listOfDays];
    data.forEach(day => day.date === date ? day.employes.push(form) : {});
    return data;
  }
  const handleClickAccept = e => {
    e.preventDefault();
    createEmployer({
      name: form.name,
      surname: form.surname,
      phoneNumber: form.phoneNumber,
      startWork: form.date,
      state: form.state,
      actualRatio: form.actualRatio,
    });
    addEmployer({ listOfDays: checkCurrentDayAndSearchingDay() });
    history.push('/work/managment/');
  };
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/managment/');
  };
  return (
    <WrapperForm>
      <WrapperLabel>
        <FieldTitle>Imie</FieldTitle>
        <FieldInput
          name="name"
          value={form.name}
          onChange={e => handleChange(e, setForm, form)}
          type="text"
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>Nazwisko</FieldTitle>
        <FieldInput
          name="surname"
          value={form.surname}
          onChange={e => handleChange(e, setForm, form)}
          type="text"
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>Telefon</FieldTitle>
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
  ratio: state.dayOfWork.ratio,
  date: state.dayOfWork.date,
  listOfDays: state.dayOfWork.listOfDays,
});

Create.propTypes = {
  handleChange: PropTypes.func,
  createEmployer: PropTypes.func,
  addEmployer: PropTypes.func,
  ratio: PropTypes.number,
  date: PropTypes.string,
  listOfDays: PropTypes.array,
}

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Create));
