import React from "react";
import styled from 'styled-components';

const StyledPageApp = styled.h1`
  background-color: #282c43;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  font-family: Arial;
`;

export const PageApp = ({ title }) => {
  return <StyledPageApp>{title}</StyledPageApp>
};

