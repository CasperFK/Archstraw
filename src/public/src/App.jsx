import React from 'react';
import { Reset } from 'styled-reset';
import { withTranslation, useTranslation } from 'react-i18next';
import PageApp from './PageApp';
import MainPage from './components/menu/MenuHandle';

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Reset />
      <PageApp title={t('title')} />
      <MainPage />
    </>
  );
};

export default withTranslation()(App);
