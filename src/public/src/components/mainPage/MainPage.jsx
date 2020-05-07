import React from 'react';
import { Wrapper, Title, Features, ListItem, ArrowContainer, Arrow } from './styles/styles';
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
        <ListItem>
          <Features>
            {t('main.article3')}
            <ArrowContainer>
              <Arrow/>
            {t('main.article3elements', { returnObjects: true }).map(el =>
              <ListItem key={el}>{el}</ListItem>)}
            </ArrowContainer>
          </Features>
        </ListItem>
        <ListItem>
          <Features>
            {t('main.article4')}
            <ArrowContainer>
              <Arrow/>
            {t('main.article4elements', { returnObjects: true }).map(el =>
              <ListItem key={el}>{el}</ListItem>)}
            </ArrowContainer>
          </Features>
        </ListItem>
      </Features>
    </Wrapper>
  );
};

export default withTranslation()(MainPage);
