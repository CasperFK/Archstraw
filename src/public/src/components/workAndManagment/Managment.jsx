import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import Button from '../common/components/Button';

import {
  CurrentDay,
  Title,
  ChooseFromSelect,
  OptionContainer,
  Container,
} from './styles/style';

import Employee from './Employee';
import actions from '../../app/work/duck/actions';
import { sendNewEmployeeFromSelect } from '../../../apiCalls';

const Managment = ({ date, ratio, employess, employee, createEmployer, setLocation, backData }) => {
  const { t } = useTranslation();
  const location = useLocation();

  const [worker, setWorker] = React.useState(employee[0]._id);

  React.useEffect(()=> {
    setLocation(location.pathname);
  }, location);

  const now = new Date();

  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/create/');
  };

  const handleChange = e => {
    setWorker(e.target.value);
  }

  const handleClickFromSelect = () => {
    employee.forEach(async (option) => {
      let excludeWorkerOne;
      let excludeWorkerTwo;
      for(const worker of employess) {
        if(worker.id === option.id) {
          excludeWorkerOne = worker.id;
          break;
        }
      }
      for(const worker of backData.employees) {
        if(worker.id === option._id) {
          excludeWorkerTwo = worker.id;
          break;
        }
      }
      if(option.id === worker && option.id !== excludeWorkerOne && option.id !== excludeWorkerTwo) {
        await sendNewEmployeeFromSelect({
          id: option.id,
          name: option.name,
          surname: option.surname,
          phoneNumber: option.phoneNumber,
          startWork: currentTime,
          endWork: '',
          state: 0,
          date
        });
        createEmployer({
          id: option.id,
          name: option.name,
          surname: option.surname,
          phoneNumber: option.phoneNumber,
          startWork: currentTime,
          endWork: '',
          state: 0,
        });
      }
    })
  }

  const options = employee.map(({name, surname, id}) =>
    <option key={id} value={id}>{`${name} ${surname}`}</option>
  );

  return (
    <>
      {date !== '' ? (
        <CurrentDay>
          <Title>
            {`${t('work.managment.currentDate')} ${date} ${t(
              'work.managment.ratio',
            )} ${ratio} ${t('work.managment.currency')}`}
          </Title>
          <Container special>
            <Button handleClick={handleClick} text={t('work.managment.addEmployer')} />
            <Container>
              <ChooseFromSelect>
                {t('work.managment.chooseFromSelect')}
              </ChooseFromSelect>
              <OptionContainer value={worker} onChange={handleChange}>
                {options}
              </OptionContainer>
              <Button handleClick={handleClickFromSelect} text={t('work.managment.accept')} />
            </Container>
          </Container>
          <div>
            {employess.map(({ id, name, surname, state }) => (
              <Employee key={id} id={id} name={name} surname={surname} state={state} />
            ))}
          </div>
        </CurrentDay>
      ) : (
        ''
      )}
    </>
  );
};

Managment.propTypes = {
  setLocation: PropTypes.func,
  date: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  employess: PropTypes.array,
  createEmployer: PropTypes.func,
  employee: PropTypes.array,
  backData: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  createEmployer: (employer) => dispatch(actions.addEmployer(employer)),
});

const mapStateToProps = (state) => ({
  date: state.dayOfWork.date,
  ratio: state.dayOfWork.ratio,
  backData: state.dayOfWork.backData,
  employess: state.employer.employess,
  employee: state.employee.permanentEmployee,
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Managment));
