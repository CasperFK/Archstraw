import types from './types';

const INITIAL_STATE = {
  employess: [],
  createFlag: false,
};

const employeeHandle = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_EMPLOYEE:
      return {
        ...state,
        employess: [
          ...state.employess,
          {
            id: action.employee.id,
            name: action.employee.name,
            surname: action.employee.surname,
            phoneNumber: action.employee.phoneNumber,
            startWork: action.employee.startWork,
            endWork: action.employee.endWork,
            state: action.employee.state,
            salaryStatus: action.employee.salaryStatus,
          },
        ],
      };
    case types.UPDATE_EMPLOYEE:
      return {
        ...state,
        employess: [
          ...state.employess.map((employee) => {
            if (employee.id === action.employee[0].id) {
              if (action.condition === '+') {
                return {
                  ...employee,
                  state: (employee.state += 1),
                };
              }
              if (action.condition === '-') {
                return {
                  ...employee,
                  state: employee.state < 1 ? 0 : (employee.state -= 1),
                };
              }
            }
            return employee;
          }),
        ],
      };
    case types.UPDATE_EMPLOYEE_SALARY_STATUS:
      return {
        employess: [
          ...state.employess.map((employee) => {
            if (employee.id === action.employee[0].id) {
              return {
                ...employee,
                salaryStatus: true,
              }
            }
            return employee;
          }),
        ],
      };
    case types.CLEAR_EMPLOYEE: {
      return {
        employess: []
      }
    }
    default:
      return state;
  }
};

export default employeeHandle;
