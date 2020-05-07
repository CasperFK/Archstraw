import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StyledPageApp = styled.h1`
  background-color: ${({ flag }) =>  flag === false ? "#fff" : "#a0505a"};
  background-image: ${({ flag }) =>  flag === false ? "linear-gradient(to top left, #4A148C, #C51162)" : ""};
  height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: white;
`;

const PageApp = ({ title, formFlag }) => {
  return <StyledPageApp flag={formFlag}>{title}</StyledPageApp>;
};

PageApp.propTypes = {
  formFlag: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  formFlag: state.signIn.formFlag,
});

export default connect(mapStateToProps, {})(PageApp);
