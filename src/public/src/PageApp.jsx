import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPageApp = styled.h1`
  background-color: #a0505a;
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const PageApp = ({ title }) => (
  <StyledPageApp>{title}</StyledPageApp>
);

PageApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageApp;
