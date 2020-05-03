import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';

const Statistics = () => {
  const { t } = useTranslation();

  return (
    <div style={{minHeight: '80vh'}}>{t('statistics')}</div>
  );
};

export default withTranslation()(Statistics);
