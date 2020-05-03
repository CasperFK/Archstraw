import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBtn = styled.button`
  font-family: 'Roboto', sans-serif;
  border: none;
  display: 'block';
  position: ${props => props.logout ? 'fixed' : 'relative'};
  bottom: ${props => props.logout ? '20px' : 'auto'};
  left: ${props => props.logout ? '20px' : 'auto'};
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: ${props => props.login ? 'rgba(255,255,255,.2)' : '#83506c'};
  padding: 10px 0;
  margin: ${props => props.fullWidth ? '5px 30px' : '5px auto'};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  width: ${props => props.fullWidth ? 'calc(100% - 60px)' : '150px'};

  @media (min-width: 1024px) {
    &:after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: ${props => props.fullWidth ? '200vh' : '500%'};
      width: ${props => props.fullWidth ? '150vw' : '140%'};
      background: #bdafc0;
      transition: all 0.5s ease-in-out;
      transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }

    &:hover:after {
      transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
  }
`;

const StyledSpan = styled.span`
  position: relative;
  z-index: 1;
`;

const Button = ({ text, fullWidth, logout, handleClick, login }) => (
  <StyledBtn onClick={handleClick} fullWidth={fullWidth} logout={logout} login={login}>
    <StyledSpan>{text}</StyledSpan>
  </StyledBtn>
);

Button.propTypes = {
  text: PropTypes.string,
  fullWidth: PropTypes.bool,
  logout: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Button;
