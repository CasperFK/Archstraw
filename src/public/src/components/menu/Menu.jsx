import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';
import MainPage from '../mainPage/MainPage';
import Statistics from '../statistics/Statistics';
import Work from '../workAndManagment/Work';
import {
  Wrapper,
  Navigation,
  ListItem,
  ListWrapper,
  StyledLink,
} from './styles/style';
import { useTranslation } from 'react-i18next';
import Button from '../common/components/Button';

const Menu = ({ changeIncorrect }) => {
  const { t } = useTranslation();
  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    changeIncorrect();
  };
  return (
     <Router>
      <Wrapper>
        <Navigation>
          <ListWrapper>
            <ListItem>
              <StyledLink to="/">{t('menu.start')}</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/work">{t('menu.workDesk')}</StyledLink>
            </ListItem>
            <ListItem>
              <StyledLink to="/statistics">{t('menu.statistics')}</StyledLink>
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
        <Button logout text={t('menu.logout')} handleClick={handleClick} />
      </Wrapper>
    </Router>
  );
};

Menu.propTypes = {
  changeIncorrect: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
});

export default connect(null, mapDispatchToProps)(Menu);
