import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  background-color:transparent;
  height: 25px;
  border: 1px solid #ff33dd;
  border-radius: 3px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  padding: 5px;
  max-width: 200px;
`;

const SecondaryInput = ({ name, type, value, handleChange, placeholder}) => (
  <StyledInput name={name} type={type} value={value} onChange={handleChange} placeholder={placeholder} />
);

SecondaryInput.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default SecondaryInput;