import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faPlus, faMinus, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import SweetAlert from 'sweetalert2-react';

import { updateStateForEmployee, updateSalaryStatus } from '../../../apiCalls';

import {
  Container,
  EmployeeNameSurname,
  SimpleButton,
  EmployeeWrapper,
  HoverElement,
} from '../style';
import actions from '../../../app/work/duck/actions';

const mapStateToProps = ({
  employer: { employess },
  dayOfWork: { date },
}) => ({
  employee: employess,
  date,
});

const Employee = ({ name, surname, state, id, salaryStatus }) => {
  const dispatch = useDispatch();
  const { employee, date } = useSelector(mapStateToProps);

  const [accept, setAccept] = React.useState(false);
  const [aggregate, setAggregate] = React.useState(false);
  const handleAdd = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    dispatch(actions.updateEmployeeState(searchingEmployee, '+'));
  };

  const handleMinus = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    dispatch(actions.updateEmployeeState(searchingEmployee, '-'));
  };

  const acceptUpdate = async () => {
    await updateStateForEmployee({ id, state, date });
    setAccept(true);
  }

  const acceptAggregate = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    dispatch(actions.updateEmployeeSalaryState(searchingEmployee));
    await updateSalaryStatus({ id, salaryStatus: true, date })
    setAggregate(true);
  }


  return (
    <Container style={{ margin: '0 auto 50px' }} flex>
      {salaryStatus ? <HoverElement flex /> : ""}
      <EmployeeWrapper>
        <EmployeeNameSurname>{`${name} ${surname}, łubianki: [${state}]`}</EmployeeNameSurname>
        <SimpleButton onClick={handleAdd} disable={salaryStatus}>
          <FontAwesomeIcon icon={faPlus} />
        </SimpleButton>
        <SimpleButton onClick={handleMinus} disable={salaryStatus}>
          <FontAwesomeIcon icon={faMinus} />
        </SimpleButton>
        <SimpleButton onClick={acceptUpdate} disable={salaryStatus}>
          <FontAwesomeIcon icon={faVoteYea} />
          <SweetAlert
            show={accept}
            title="Sukces"
            text="Pomyślnie zapisano zmiany!!"
            onConfirm={() => setAccept(false)}
          />
        </SimpleButton>
        <SimpleButton onClick={acceptAggregate} disable={salaryStatus}>
          <FontAwesomeIcon icon={faDonate} />
          <SweetAlert
            show={aggregate}
            title="Sukces"
            text="Spłacono pracownika!!"
            onConfirm={() => setAggregate(false)}
          />
        </SimpleButton>
      </EmployeeWrapper>
    </Container>
  );
};

Employee.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  state: PropTypes.number.isRequired,
  salaryStatus: PropTypes.bool.isRequired,
};

export default Employee;
