import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslation, useTranslation } from 'react-i18next';

import { sendNewEmployess } from '../../../../../apiCalls';
import actions from '../../../../app/work/duck/actions';
import {
  WrapperForm,
  WrapperLabel,
  FieldTitle,
} from '../../style';
import Button from '../../../common/components/Button';
import SecondaryInput from '../../../common/components/SecondaryInput';

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
    salaryStatus: false,
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
        date,
        salaryStatus: false,
      });

      console.log(newEmployesId);

      if(newEmployesId) {
        createEmployer({
          id: newEmployesId,
          name,
          surname,
          phoneNumber,
          startWork,
          endWork,
          state,
          salaryStatus: false,
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
        <SecondaryInput
          name="name"
          value={form.name}
          handleChange={e => handleChange(e, setForm, form)}
          type="text"
          placeholder=""
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.surname')}</FieldTitle>
        <SecondaryInput
          name="surname"
          value={form.surname}
          handleChange={e => handleChange(e, setForm, form)}
          type="text"
          placeholder=""
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.phoneNumber')}</FieldTitle>
        <SecondaryInput
          name="phoneNumber"
          value={form.phoneNumber}
          handleChange={e => handleChange(e, setForm, form)}
          type="number"
          placeholder=""
        />
      </WrapperLabel>
      <Button handleClick={handleClickAccept} text={t('work.createEmployer.confirm')} />
      <Button handleClick={handleClick} text={t('work.createEmployer.cancel')} />
    </WrapperForm>
  );
};

const mapDispatchToProps = dispatch => ({
  createEmployer: (employer) => dispatch(actions.addEmployer(employer)),
  addEmployer: (employer) => dispatch(actions.addEmployerToDay(employer))
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
