import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperForm = styled.form`
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const WrapperLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 5px;
`;

export const FieldTitle = styled.span`
  display:block;
  text-align: center;
  padding: 3px 0;
`;

export const FieldInput = styled.input`
  width: 70%;
  margin: 2px 5px;
  padding: 3px;
`;

export const Btn = styled.button`
  width: 130px;
  margin-bottom: 5px;
  padding: 5px 0;
  background-color: #ffffff;
  border: 1px solid black;
`;

export const CurrentDay = styled.div`
  padding: 10px;
  text-align: center;
`;

export const AddEmployer = styled.button`
  padding: 5px;
  width: 130px;
  text-align:center;
  border: 1px solid black;
  background-color: #ffffff;
`;

export const Title = styled.h1`
  margin: 10px 0;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  padding: 5px;
`;

export const NavWrapper = styled.nav`
  margin: 0 5px;
  border-top: 1px solid black;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

export const ListItem = styled.li`
  line-height: 35px;
`;

export const InfoElement = styled.div`
  height: 30px;
  text-align: center;
  color: red;
`;

export const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`;