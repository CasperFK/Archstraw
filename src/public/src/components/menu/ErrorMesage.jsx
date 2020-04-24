import React from 'react';
import PropTypes from 'prop-types';
import { StyledErrorMessage } from './styles/style';

const ErrorMessage = ({ text }) => {
  return (
    <StyledErrorMessage>{text}</StyledErrorMessage>
  )
}

ErrorMessage.propTypes = {
  text: PropTypes.string,
}

export default ErrorMessage;