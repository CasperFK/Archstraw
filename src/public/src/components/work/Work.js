import React from 'react';
import {
  Wrapper,
  NavWrapper,
  Navigation,
  ListItem,
  LinkItem,
  InfoElement,
} from './styles/style';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Topic from './Topic';

const Work = () => {
  let { path, url } = useRouteMatch();
  return (
    <Wrapper>
      <NavWrapper>
        <Navigation>
          <ListItem>
            <LinkItem to={`${url}/day`}>Nowy dzień</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem to={`${url}/managment`}>Zarządzanie</LinkItem>
          </ListItem>
        </Navigation>
      </NavWrapper>
      <Switch>
        <Route exact path={path}>
          <InfoElement>wybierz sekcje</InfoElement>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </Wrapper>
  );
};

export default Work;
