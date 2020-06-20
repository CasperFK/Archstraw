import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Reset } from 'styled-reset';
import styled from 'styled-components';
import { withTranslation, useTranslation } from 'react-i18next';

import PageApp from './PageApp';
import Menu from './components/Menu/Menu';
import actions from './app/signIn/duck/actions';

const GlobalStyles = styled.div`
  background-color: #f9f4f4;
  font-family: 'Roboto', sans-serif;
  min-height: 100%;
  color: #001122;
`;

const token = localStorage.getItem('authToken');

const App = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    if(token) {
      dispatch(actions.changeCorrect());
    }
  }, []);

  return (
    <>
      <Reset style={{ boxSizing: 'border-box' }} />
      <GlobalStyles>
        <PageApp title={t('title')} />
        <Menu />
      </GlobalStyles>
    </>
  );
};

export default withTranslation()(App);
