import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import MainPage from '../mainPage/MainPage';
import Statistics from '../statistics/Statistics';
import Work from '../work/Work';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 90vh;
  width: 100%;
  font-family: arial;
`;

const Navigation = styled.div`
  min-height: 10vh;
`;

const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  line-height: 10vh;
  list-style: none;
`;

const ListItem = styled.li` 
  font-size: 16px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;  
`;

const LogoutBtn = styled.button`
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

const MenuApp = (props) => {

  const handleClick = (e) => {
    e.preventDefault();
    props.changeIncorrect();
  }
  return (
    <Router>
      <Wrapper>
        <Navigation>
          <ListWrapper>
            <ListItem>
              <StyledLink to="/">Strona główna</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/work">Panel pracy</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/statistics">Statystyka</StyledLink>
            </ListItem>
          </ListWrapper>
        </Navigation>

        <Switch>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="/">
            <MainPage />
          </Route>
        </Switch>
        <LogoutBtn onClick={handleClick}>
          <StyledLink to="/">Wyloguj</StyledLink>
        </LogoutBtn>
      </Wrapper>
    </Router>
  )
}

const mapDispatchToProps = dispatch => ({
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
})

export default connect(null, mapDispatchToProps)(MenuApp);