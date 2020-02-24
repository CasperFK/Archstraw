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

const Work = () => {
  let { path, url } = useRouteMatch();
  return (
    <Wrapper>
      <NavWrapper>
        <Navigation>
          <ListItem>
            <Link to={`${url}/day`}>Nowy dzień</Link>
          </ListItem>
          <ListItem>
            <Link to={`${url}/managment`}>Zarządzanie</Link>
          </ListItem>
        </Navigation>
      </NavWrapper>
      <Switch>
        <Route exact path={path}>
          <div>wybierz sekcje</div>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </Wrapper>
  )
}

export default Work;