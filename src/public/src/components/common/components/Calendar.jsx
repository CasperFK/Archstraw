import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Input from './Input';

const CalendarWrapper = styled.div`
  padding: 10px;
`;

const Calendar = ({ name, value, handleChange }) => (
  <CalendarWrapper>
    <Input dark name={name} type="date" value={value} handleChange={handleChange}/>
  </CalendarWrapper>
);

Calendar.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Calendar;