import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  height: 50px;
  text-align: center;
  font-size: 25px;
`;

export const FormContainer = styled.form`
  background: linear-gradient(to top left, #4A148C, #C51162);
  background-repeat: cover;
  color: white;
  height: calc(90vh - 60px);
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const LoginPart = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 15px 0;
  height: 30px;
  line-height: 30px;
`;

export const StyledErrorMessage = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  color: red;
  padding-left: 15px;
  text-align: center;
`;

export const Wrapper = styled.div`
  width: 100%;
`;

export const Navigation = styled.div`
  min-height: 10vh;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  line-height: 10vh;
  list-style: none;
`;

export const ListItem = styled.li` 
  font-size: 16px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;  
`;