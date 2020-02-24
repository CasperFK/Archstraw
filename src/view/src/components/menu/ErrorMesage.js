import React from 'react';
import styled from 'styled-components';

const StyledErrorMessage = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  color: red;
  padding-left: 15px;
`;

const ErrorMessage = ({ text }) => {
  return (
    <StyledErrorMessage>{text}</StyledErrorMessage>
  )
}

export default ErrorMessage;