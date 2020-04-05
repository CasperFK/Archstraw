import React from 'react';
import { Reset } from 'styled-reset';
import { PageApp } from './PageApp';
import MainPage from './components/menu/Menu';
import { withTranslation, useTranslation } from 'react-i18next';

const App = () => {
  const { t } = useTranslation();
  return (
    <>
      <Reset />
      <PageApp title={t('title')} />
      <MainPage />
    </>
  )
}

export default withTranslation()(App);