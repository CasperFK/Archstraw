import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

const Statistics = ({ setPathname }) => {
  const { t } = useTranslation();
  const location = useLocation();

  React.useEffect(()=> {
    setPathname(location.pathname);
  }, [location]);

  return (
    <div style={{minHeight: '80vh'}}>{t('StatisticsPage')}</div>
  );
};

Statistics.propTypes = {
  setPathname: PropTypes.func,
}

export default withTranslation()(Statistics);
