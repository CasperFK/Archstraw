import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const PageTitle = styled.h1`
  height: 50px;
  text-align: center;
  font-size: 25px;
`;

export const FormContainer = styled.form`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(to top left, #4a148c, #c51162);
  background-repeat: cover;
  color: white;
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  position: absolute;
  top: 5%;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 30px;
  color: white;
`;

export const LoginPart = styled.label`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 15px 0;
  height: 30px;
  line-height: 30px;
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
  line-height: 8vh;
  list-style: none;
`;

export const ListItem = styled.li`
  & {
    font-size: 14px;
    flex-basis: 30%;
    position: relative;
    text-align: center;
  }

  &:before {
    content: '';
    position: absolute;
    top: 95%;
    left: 25%;
    bottom: 0;
    right: 25%;
    background-color: ${(props) => props.flag ? '#444' : ''};
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.flag ? '#bd5f53' : '#000'};
`;
