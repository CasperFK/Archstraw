import React from 'react';
import { StyledErrorMessage } from './styles/style';

const ErrorMessage = ({ text }) => {
  return (
    <StyledErrorMessage>{text}</StyledErrorMessage>
  )
}

export default ErrorMessage;