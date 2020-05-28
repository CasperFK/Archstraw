import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory, useLocation } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

import Button from '../../common/components/Button';
import { sendNewDay, getListOfEmployee } from '../../../apiCalls';
import actions from '../../../app/work/duck/actions';
import SecondaryInput from '../../common/components/SecondaryInput';
import {
  Title,
  FormContainer,
  CreateDayContainer
} from '../style';

const regex = /[-+]?(?:\d*\.?\d+|\d+\.?\d*)(?:[eE][-+]?\d+)?$/;

const Day = ({ createDay, getPermanentEmployeeFromApi, createEmployee, setLocation }) => {
  const { t } = useTranslation();

  const location = useLocation();

  React.useEffect(() => {
    setLocation(location.pathname);
  }, location);

  const now = new Date();

  const date = `${now.getDate() < 10 ? `0${now.getDate()}` : now.getDate()}/${
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
    let validateValue;
    if (value.match(regex)) {
      validateValue = value;
    } else {
      validateValue = '';
    }
    setForm({
      ...form,
      [name]: validateValue,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (form.date !== '' && form.ratio !== 0 && form.ratio.match('.')) {
      if(form.ratio[0] === 0) {
        setError(true);
        return;
      }
      const backData = await sendNewDay({
        ...form,
        employess: [],
      });
      if(backData === []) {
        createDay(form);
      } else {
        createDay({
          date: backData.date,
          ratio: backData.ratio,
          backData,
        })
        backData.employees.map(worker => {
          createEmployee({
            id: worker.id,
            name: worker.name,
            surname: worker.surname,
            phoneNumber: worker.phoneNumber,
            startWork: worker.startWork,
            endWork: worker.endWork,
            state: parseInt(worker.state),
            salaryStatus: worker.salaryStatus,
          })
        })
      }
      setForm({
        ...form,
        date: '',
        ratio: 0,
      });
    } else {
      setError(true);
      return; 
    }
    const employee = await getListOfEmployee();
    getPermanentEmployeeFromApi(employee);
    history.push('/work/managment');
  };

  return (
    <FormContainer>
      <Title>
        <span>{`${t('work.newDay.data')}: ${date}`}</span>
      </Title>
      <CreateDayContainer>
        <p style={{padding: '10px 0'}}>{t('work.newDay.ratioTitle')}</p>
        {error ? <p style={{color: 'red', display: 'block'}}>{t('work.newDay.error')}</p> : null}
        <SecondaryInput
          name="ratio"
          value={form.ratio}
          type="string"
          handleChange={handleChange}
          placeholder=""
        />
      </CreateDayContainer>
      <Button text={t('work.newDay.create')} handleClick={handleSubmit} type="submit" />
    </FormContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getPermanentEmployeeFromApi: (value) => dispatch(actions.getPermanentEmployeeFromApi(value)),
  createDay: (value) => dispatch(actions.createDay(value)),
  createEmployee: (employer) => dispatch(actions.addEmployer(employer)),
});

Day.propTypes = {
  setLocation: PropTypes.func,
  getPermanentEmployeeFromApi: PropTypes.func,
  createDay: PropTypes.func,
  createEmployee: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(withTranslation()(Day));
