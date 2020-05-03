import React from 'react';
import { Reset } from 'styled-reset';
import { withTranslation, useTranslation } from 'react-i18next';
import PageApp from './PageApp';
import MainPage from './components/menu/MenuHandle';
import styled from 'styled-components';

const GlobalStyles = styled.div`
  background-color: #f9f4f4;
  font-family: 'Roboto', sans-serif;
  min-height: 100%;
  color: #001122;
`;

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Reset />
      <GlobalStyles>
        <PageApp title={t('title')} />
        <MainPage />
      </GlobalStyles>
    </>
  );
};

export default withTranslation()(App);
