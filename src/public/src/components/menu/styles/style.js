import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  height: 50px;
  text-align: center;
  font-size: 25px;
`;

export const StyledForm = styled.form`
  font-family: arial;
  height: 90vh;
  width: 100%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginPart = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 15px 0;
  height: 30px;
  line-height: 30px;
`;

export const LoginInputTitle = styled.span`
  display: block;
  margin-right: 5px;
`;

export const SubmitBtn = styled.button`
  height: 35px;
  width: 150px;
  border: 1px solid black;
  background-color: #ffffff;
  cursor: pointer;
  &:hover {
    transition: .3s;
    background-color: #ffddff;
  }
`;

export const DataInput = styled.input`
  padding-left: 3px;
  width: 250px;
`;

export const StyledErrorMessage = styled.p`
  width: 100%;
  line-height: 30px;
  font-size: 18px;
  color: red;
  padding-left: 15px;
`;

export const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  font-family: arial;
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

export const LogoutBtn = styled.button`
  position: fixed;
  bottom: 20px;
  left: 20px;
  height: 30px;
  width: 120px;
  background-color: white;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    background-color: #ffddff;
  } 
`;