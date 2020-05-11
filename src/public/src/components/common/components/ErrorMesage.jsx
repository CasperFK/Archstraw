import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const StyledErrorMessage = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  color: red;
  padding-left: 15px;
  text-align: center;
`;

const ErrorMessage = ({ text }) => {
  return (
    <StyledErrorMessage>{text}</StyledErrorMessage>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string,
}

export default ErrorMessage;