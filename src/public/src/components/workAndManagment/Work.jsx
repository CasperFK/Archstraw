import React from 'react';
import { withTranslation, useTranslation } from 'react-i18next';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Topic from './Topic';
import {
  Wrapper,
  NavWrapper,
  Navigation,
  ListItem,
  LinkItem,
  InfoElement,
} from './styles/style';

const Work = () => {
  const { t } = useTranslation();
  const { path, url } = useRouteMatch();
  return (
    <Wrapper>
      <NavWrapper>
        <Navigation>
          <ListItem>
            <LinkItem to={`${url}/day`}>{t('work.work.day')}</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to={`${url}/managment`}>{t('work.work.managment')}</LinkItem>
          </ListItem>
        </Navigation>
      </NavWrapper>
      <Switch>
        <Route exact path={path}>
          <InfoElement>{t('work.work.info')}</InfoElement>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default withTranslation()(Work);