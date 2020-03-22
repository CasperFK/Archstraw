import React from 'react';
import styled from 'styled-components';
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Topic from './Topic';

const Wrapper = styled.div`
  padding: 5px;
`;

const NavWrapper = styled.nav`
  margin: 0 5px;
  border-top: 1px solid black;
`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
`;

const ListItem = styled.li`
  line-height: 35px;
`;

const InfoElement = styled.div`
  height: 30px;
  text-align: center;
  color: red;
`;

const LinkItem = styled(Link)`
  text-decoration: none;
  color: black;
`;

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
  )
}

export default Work;