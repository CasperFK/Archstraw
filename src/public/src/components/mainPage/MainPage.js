import React from 'react';
import { Wrapper, Title, Features, ListItem } from './styles/styles';
import { withTranslation, useTranslation } from 'react-i18next';

const MainPage = () => {

  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t('main.title')}</Title>
      <Features>
        {t('main.section1')}
        <ListItem>
          <Features>
            {t('main.article1')}
            {t('main.article1elements', { returnObjects: true }).map(el =>
              <ListItem>{el}</ListItem>)}
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            {t('main.article2')}
            {t('main.article2elements', { returnObjects: true }).map(el =>
              <ListItem>{el}</ListItem>)}
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            {t('main.article3')}
            {t('main.article3elements', { returnObjects: true }).map(el =>
              <ListItem>{el}</ListItem>)}
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            {t('main.article4')}
            {t('main.article4elements', { returnObjects: true }).map(item =>
              <ListItem>{item}</ListItem>)}
          </Features>
        </ListItem>
      </Features>
    </Wrapper>
  );
};

export default withTranslation()(MainPage);
