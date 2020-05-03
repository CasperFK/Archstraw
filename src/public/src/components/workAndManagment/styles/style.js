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
  display: block;
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
  max-height: 40px;
`;

export const CurrentDay = styled.div`
  min-height: 75vh;
  padding: 10px;
  text-align: center;
`;

export const AddEmployer = styled.button`
  padding: 5px;
  width: ${props => props.fullWidth ? 'calc(100% - 15px)' : '130px'};
  text-align: center;
  border: 1px solid black;
  background-color: #ffffff;
  max-height: 40px;
  margin: 10px 10px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 15px 0;
  font-size: 20px;
`;

export const Wrapper = styled.div`
  min-height: 79vh;
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

export const ChooseFromSelect = styled.h2`
  padding: 5px;
  width: 100%;
  text-align: center;
`;

export const OptionContainer = styled.select`
  padding: 5px 5px;
  margin: 0px 10px;
  background-color: #fff;
`;

export const CreateDayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Container = styled.div`
  display: ${props => props.flex ? 'flex' : 'block'};
  margin: ${props => props.special ? "20px" : "0"} 0;
  flex-direction: ${props => props.flex ? 'column' : 'row'}
  align-items: ${props => props.flex ? 'center' : 'flex-start'}
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  min-height: calc(75vh - 20px);
  padding: 10px;
`;

export const EmployeeOperators = styled.button`
  height: 40px;
  min-width: 40px;
  padding: 0 3px;
  line-height: 20px;
  font-size: ${props => props.fontV1 ? "15px"  : "20px"};
  background-color: #fff;
  border: 1px solid black;
  margin: 10px;
`;

export const EmployeeNameSurname = styled.p`
  margin: 10px;
  text-align: center;
  font-size: 16px;
  padding: 5px 0;
  width: 130px;
`;

