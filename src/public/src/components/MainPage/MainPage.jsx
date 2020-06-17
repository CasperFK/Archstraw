import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

import { Wrapper, Features, ListItem, ArrowContainer, Arrow } from './styles/styles';

const MainPage = ({ setPathname }) => {
  const { t } = useTranslation();

  const location = useLocation();

  React.useEffect(()=> {
    setPathname(location.pathname);
  }, [location]);

  return (
    <Wrapper>
      <Features>
        {t('main.section1')}
        <ListItem>
          <Features>
            {t('main.article1')}
            <ArrowContainer>
              <Arrow/>
            {t('main.article1elements', { returnObjects: true }).map(el =>
              <ListItem key={el}>{el}</ListItem>)}
            </ArrowContainer>
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            {t('main.article2')}
            <ArrowContainer>
              <Arrow/>
            {t('main.article2elements', { returnObjects: true }).map(el =>
              <ListItem key={el}>{el}</ListItem>)}
            </ArrowContainer>
          </Features>
        </ListItem>
      </Features>
    </Wrapper>
  );
};

MainPage.propTypes = {
  setPathname: PropTypes.func,
}

export default withTranslation()(MainPage);
