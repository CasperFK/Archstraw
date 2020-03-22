import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import MainPage from '../mainPage/MainPage';
import Statistics from '../statistics/Statistics';
import Work from '../work/Work';
import {
  Wrapper,
  Navigation,
  ListItem,
  ListWrapper,
  StyledLink,
  LogoutBtn,
} from './styles/style';

const MenuApp = ({ changeIncorrect }) => {
  const handleClick = e => {
    e.preventDefault();
    changeIncorrect();
  };
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
  );
};

const mapDispatchToProps = dispatch => ({
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
});

export default connect(null, mapDispatchToProps)(MenuApp);
