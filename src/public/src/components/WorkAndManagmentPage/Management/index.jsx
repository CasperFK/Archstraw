import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

import Button from '../../common/components/Button';
import CreateEmployee from '../Employee/modules/CreateEmployee';
import {
  CurrentDay,
  Title,
  ChooseFromSelect,
  OptionContainer,
  Container,
} from '../style';
import Employee from '../Employee';
import actions from '../../../app/work/duck/actions';
import {
  getListOfEmployee, sendNewDay,
  sendNewEmployeeFromSelect,
} from '../../../apiCalls';

const mapStateToProps = ({
  dayOfWork: { date, ratio, backData },
  employer: { employess },
  employee: { permanentEmployee },
}) => ({
  date,
  ratio,
  backData,
  employess,
  permanentEmployee,
});

const Management = ({ setLocation }) => {
  const {
    date,
    ratio,
    backData,
    employess,
    permanentEmployee,
  } = useSelector(mapStateToProps);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const location = useLocation();
  const [modal, setModal] = useState(false);
  const [worker, setWorker] = useState(
    permanentEmployee.length ? permanentEmployee[0]._id : '',
  );

  const savedBackData = JSON.parse(localStorage.getItem('backData'));

  const getData = async () => {
    const backData = await sendNewDay({
      date: savedBackData.date,
      ratio: savedBackData.ratio,
      employess: [],
    });
    if(!employess.length && backData.employees) {
      dispatch(actions.clearEmployee());
      backData.employees.forEach(item => {
        dispatch(actions.addEmployer({
          ...item,
          state: parseInt(item.state),
        }));
      })
    }
    console.log(backData)
    if (worker === '' && !permanentEmployee.length) {
      const data = await getListOfEmployee();
      dispatch(actions.getPermanentEmployeeFromApi([...data]));
    }
  };

  const unSubscribe = () => {
    dispatch(actions.clearPermanentEmployee());
    dispatch(actions.clearEmployee());
    dispatch(actions.clearDay());
  };

  React.useEffect(() => {
    setLocation(location.pathname);
    if (date === '') {
      dispatch(
        actions.createDay({
          date: savedBackData.date,
          ratio: savedBackData.ratio,
          backData: savedBackData,
        }),
      );
    }
    getData();
    return () => {
      unSubscribe();
    };
  }, []);

  const now = new Date();
  const currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  const handleClick = (e) => {
    e.preventDefault();
    setModal(true);
  };

  const handleChange = (e) => {
    setWorker(e.target.value);
  };

  const handleClickFromSelect = () => {
    permanentEmployee.forEach(async (option) => {
      let excludeWorkerOne;
      let excludeWorkerTwo;
      for (const person of employess) {
        if (person.id === option._id) {
          excludeWorkerOne = person.id;
          break;
        }
      }
      for (const person of backData.employees) {
        if (person.id === option._id) {
          excludeWorkerTwo = person.id;
          break;
        }
      }
      if (
        option._id === worker &&
        option._id !== excludeWorkerOne &&
        option._id !== excludeWorkerTwo
      ) {
        await sendNewEmployeeFromSelect({
          id: option._id,
          name: option.name,
          surname: option.surname,
          phoneNumber: option.phoneNumber,
          startWork: currentTime,
          endWork: '',
          state: 0,
          date,
          salaryStatus: false,
        });
        dispatch(
          actions.addEmployer({
            id: option._id,
            name: option.name,
            surname: option.surname,
            phoneNumber: option.phoneNumber,
            startWork: currentTime,
            endWork: '',
            state: 0,
            salaryStatus: false,
          }),
        );
      }
    });
  };

  const onClose = () => {
    setModal(false);
  }

  const options = permanentEmployee.map(({ name, surname, _id }) => (
    <option key={_id} value={_id}>{`${name} ${surname}`}</option>
  ));

  return (
    <>
      {modal ? <CreateEmployee onClose={onClose} /> : null}
      {date !== '' ? (
        <CurrentDay modal={modal}>
          <Title>
            {`${t('work.managment.currentDate')} ${date} ${t(
              'work.managment.ratio',
            )} ${ratio} ${t('work.managment.currency')}`}
          </Title>
          <Container special>
            <Button
              handleClick={handleClick}
              text={t('work.managment.addEmployer')}
            />
            <Container>
              <ChooseFromSelect>
                {t('work.managment.chooseFromSelect')}
              </ChooseFromSelect>
              <OptionContainer value={worker} onChange={handleChange}>
                {options}
              </OptionContainer>
              <Button
                handleClick={handleClickFromSelect}
                text={t('work.managment.accept')}
              />
            </Container>
          </Container>
          <div>
            {employess
              .map(({ id, name, surname, state, salaryStatus }) => (
                <Employee
                  key={id}
                  id={id}
                  name={name}
                  surname={surname}
                  state={state}
                  salaryStatus={salaryStatus}
                />
              ))
              .reverse()}
          </div>
        </CurrentDay>
      ) : (
        ''
      )}
    </>
  );
};

Management.propTypes = {
  setLocation: PropTypes.func,
};

export default withTranslation()(Management);
