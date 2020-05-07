import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
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

const Managment = ({ date, ratio, employess, employee, createEmployer }) => {
  const { t } = useTranslation();

  const [worker, setWorker] = React.useState(employee[0]._id);

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
      if(option._id === worker) {
        await sendNewEmployeeFromSelect({
          id: option._id,
          name: option.name,
          surname: option.surname,
          phoneNumber: option.phoneNumber,
          startWork: currentTime,
          endWork: '',
          state: 0,
          date
        });
        createEmployer({
          id: option._id,
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

  // eslint-disable-next-line
  const options = employee.map(({name, surname, _id}) =>
    <option key={_id} value={_id}>{`${name} ${surname}`}</option>
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
            {employess.map(({id, name, surname, state})=> (
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
  date: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  employess: PropTypes.array,
  createEmployer: PropTypes.func,
  employee: PropTypes.array,
};

const mapDispatchToProps = (dispatch) => ({
  createEmployer: (employer) => dispatch(actions.addEmployer(employer)),
});

const mapStateToProps = (state) => ({
  date: state.dayOfWork.date,
  ratio: state.dayOfWork.ratio,
  employess: state.employer.employess,
  employee: state.employee.permanentEmployee,
});

export default connect(mapStateToProps, mapDispatchToProps)(withTranslation()(Managment));
