import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDonate, faPlus, faMinus, faVoteYea } from '@fortawesome/free-solid-svg-icons';
import SweetAlert from 'sweetalert2-react';

import { updateStateForEmployee } from '../../../apiCalls';

import {
  Container,
  EmployeeNameSurname,
  SimpleButton,
  EmployeeWrapper,
} from './styles/style';
import actions from '../../app/work/duck/actions';

const Employee = ({ name, surname, state, id, updateEmployee, employee }) => {
  const [accept, setAccept] = React.useState(false);
  const [aggregate, setAggregate] = React.useState(false);
  const handleAdd = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    updateEmployee(searchingEmployee, '+');

  };

  const handleMinus = async () => {
    const searchingEmployee = employee.filter((worker) => worker.id === id);
    updateEmployee(searchingEmployee, '-');
  };

  const acceptUpdate = async () => {
    await updateStateForEmployee({ id: id, state: state});
    setAccept(true);
  }

  const acceptAggregate = async () => {
    setAggregate(true);
  }


  return (
    <Container style={{ margin: '0 auto 50px' }} flex>
      <EmployeeWrapper>
        <EmployeeNameSurname>{`${name} ${surname}, łubianki: [${state}]`}</EmployeeNameSurname>
        <SimpleButton onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} />
        </SimpleButton>
        <SimpleButton onClick={handleMinus}>
          <FontAwesomeIcon icon={faMinus} />
        </SimpleButton>
        <SimpleButton onClick={acceptUpdate}>
          <FontAwesomeIcon icon={faVoteYea} />
          <SweetAlert
            show={accept}
            title="Sukces"
            text="Pomyślnie zapisano zmiany!!"
            onConfirm={() => setAccept(false)}
          />
        </SimpleButton>
        <SimpleButton onClick={acceptAggregate}>
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
