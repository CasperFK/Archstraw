import React from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import actions from '../../../../app/signIn/duck/actions';
import MainPage from '../../../MainPage/MainPage';
// import Statistics from '../../../StatisticsPage/Statistics';
import Work from '../../../WorkAndManagmentPage/Work';
import {
  Wrapper,
  Navigation,
  ListItem,
  ListWrapper,
  StyledLink,
} from '../../style';
import { useTranslation } from 'react-i18next';
import Button from '../../../common/components/Button';

const Menu = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [pathname, setPathname] = React.useState('/');
  const handleClick = e => {
    e.preventDefault();
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/';
    dispatch(actions.changeIncorrect());
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
            {/*<ListItem flag={pathname === '/StatisticsPage'}>*/}
            {/*  <StyledLink flag={pathname === '/StatisticsPage'} to="/StatisticsPage">{t('Menu.StatisticsPage')}</StyledLink>*/}
            {/*</ListItem>*/}
          </ListWrapper>
        </Navigation>

        <Switch>
          <Route path="/work">
            <Work setPathname={setPathname} />
          </Route>
          {/*<Route path="/StatisticsPage">*/}
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

export default Menu;
