import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import actions from '../../../../app/signIn/duck/actions';
import MainPage from '../../../mainPage/MainPage';
import Statistics from '../../../statistics/Statistics';
import Work from '../../../workAndManagment/Work';
import {
  Wrapper,
  Navigation,
  ListItem,
  ListWrapper,
  StyledLink,
} from '../../style';
import { useTranslation } from 'react-i18next';
import Button from '../../../common/components/Button';

const Menu = ({ changeIncorrect }) => {
  const { t } = useTranslation();
  const [pathname, setPathname] = React.useState('/');
  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/';
    changeIncorrect();
  };

  return (
     <Router>
      <Wrapper>
        <Navigation>
          <ListWrapper>
            <ListItem flag={pathname === '/'}>
              <StyledLink flag={pathname === '/'} to="/">{t('menu.start')}</StyledLink>
            </ListItem>
            <ListItem flag={pathname.includes('/work')}>
              <StyledLink flag={pathname.includes('/work')} to="/work">{t('menu.workDesk')}</StyledLink>
            </ListItem>
            {/*<ListItem flag={pathname === '/statistics'}>*/}
            {/*  <StyledLink flag={pathname === '/statistics'} to="/statistics">{t('menu.statistics')}</StyledLink>*/}
            {/*</ListItem>*/}
          </ListWrapper>
        </Navigation>

        <Switch>
          <Route path="/work">
            <Work setPathname={setPathname} />
          </Route>
          {/*<Route path="/statistics">*/}
          {/*  <Statistics setPathname={setPathname} />*/}
          {/*</Route>*/}
          <Route path="/">
            <MainPage setPathname={setPathname} />
          </Route>
        </Switch>
        <Button logout text={t('menu.logout')} handleClick={handleClick} />
      </Wrapper>
    </Router>
  );
};

Menu.propTypes = {
  changeIncorrect: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
});

export default connect(null, mapDispatchToProps)(Menu);
