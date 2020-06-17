import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';

import { sendNewEmployess } from '../../../../apiCalls';
import actions from '../../../../app/work/duck/actions';
import { WrapperForm, WrapperLabel, FieldTitle } from '../../style';
import Button from '../../../common/components/Button';
import SecondaryInput from '../../../common/components/SecondaryInput';

const mapStateToProps = ({ dayOfWork: { date }}) => ({ date });

const CreateEmployee = ({ onClose }) => {
  const { date } = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const now = new Date();
  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const [error, setError] = useState(false);
  const [form, setForm] = useState({
    name: '',
    surname: '',
    phoneNumber: '',
    startWork: currentTime,
    endWork: '',
    state: 0,
    salaryStatus: false,
  });

  const handleClickAccept = async (e) => {
    const { name, surname, phoneNumber, startWork, endWork, state } = form;
    e.preventDefault();
    if (name !== '' && surname !== '') {
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

      if (newEmployesId) {
        dispatch(actions.addEmployer({
          id: newEmployesId,
          name,
          surname,
          phoneNumber,
          startWork,
          endWork,
          state,
          salaryStatus: false,
        }));
      }
    } else {
      setError(true);
      return;
    }
    onClose();
  };

  const handleChange = (e, setForm, form) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <WrapperForm>
      {error ? (
        <span style={{ color: 'red', display: 'block' }}>
          {t('work.createEmployer.error')}
        </span>
      ) : null}
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.name')}</FieldTitle>
        <SecondaryInput
          name="name"
          value={form.name}
          handleChange={(e) => handleChange(e, setForm, form)}
          type="text"
          placeholder=""
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.surname')}</FieldTitle>
        <SecondaryInput
          name="surname"
          value={form.surname}
          handleChange={(e) => handleChange(e, setForm, form)}
          type="text"
          placeholder=""
        />
      </WrapperLabel>
      <WrapperLabel>
        <FieldTitle>{t('work.createEmployer.phoneNumber')}</FieldTitle>
        <SecondaryInput
          name="phoneNumber"
          value={form.phoneNumber}
          handleChange={(e) => handleChange(e, setForm, form)}
          type="number"
          placeholder=""
        />
      </WrapperLabel>
      <Button
        handleClick={handleClickAccept}
        text={t('work.createEmployer.confirm')}
      />
      <Button handleClick={onClose} text={t('work.createEmployer.cancel')} />
    </WrapperForm>
  );
};


CreateEmployee.propTypes = {
  onClose: PropTypes.func,
};

export default withTranslation()(CreateEmployee);
