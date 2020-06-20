import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin-bottom: 5vh;
  border-right: none;
  border-top: none;
  border-left: none;
  background-color:transparent;
  outline: none;
  color: ${(props) => props.dark ? "#333" : "#fff"};
  caret-color: white;
  height: 25px;
  
  &::placeholder {
    text-align: center;
    color: white;
    font-family: 'Roboto', sans-serif;
  }
`

const Input = ({ name, type, value, handleChange, placeholder, dark}) => (
  <StyledInput dark={dark} name={name} type={type} value={value} onChange={handleChange} placeholder={placeholder} />
);

Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  placeholder: PropTypes.string,
  dark: PropTypes.bool,
};

export default Input;
