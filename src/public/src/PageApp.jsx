import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

const PageApp = ({ title }) => (
  <StyledPageApp>{title}</StyledPageApp>
);

PageApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageApp;
