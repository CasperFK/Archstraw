import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate } from '@fortawesome/free-solid-svg-icons';

import { updateStateForEmployee } from '../../../apiCalls';

import { Container, EmployeeNameSurname, AddEmployer } from './styles/style';
import actions from '../../app/work/duck/actions';

const Employee = ({ name, surname, state, id, updateEmployee, employee }) => {
  const handleAdd = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    updateEmployee(searchingEmployee, '+');
    await updateStateForEmployee({
      id: id,
      state: (state += 1),
    });
  };

  const handleMinus = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    updateEmployee(searchingEmployee, '-');
    await updateStateForEmployee({
      id: id,
      state: (state -= 1),
    });
  };

  return (
    <Container style={{marginBottom: '50px'}} flex>
      <EmployeeNameSurname>{`${name} ${surname}, łubianki: [${state}]`}</EmployeeNameSurname>
      <AddEmployer onClick={handleAdd}>+</AddEmployer>
      <AddEmployer onClick={handleMinus}>-</AddEmployer>
      <AddEmployer>
        <FontAwesomeIcon icon={faDonate} />
      </AddEmployer>
    </Container>
  );
};

Employee.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  surname: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  employee: PropTypes.array,
  updateEmployee: PropTypes.func,
};

const mapStateToProps = (state) => ({
  employee: state.employer.employess,
});

const mapDispatchToProps = (dispatch) => ({
  updateEmployee: (employee, condition) =>
    dispatch(actions.updateEmployeeState(employee, condition)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Employee);
