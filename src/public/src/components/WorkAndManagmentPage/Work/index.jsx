import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom';

import Topic from '../Topic';
import {
  Wrapper,
  NavWrapper,
  Navigation,
  ListItem,
  LinkItem,
  InfoElement,
} from '../style';

const Work = ({ date, setPathname }) => {
  const [localLocation, setLocalLocation] = React.useState('')
  const location = useLocation();
  const { t } = useTranslation();
  const { path, url } = useRouteMatch();

  React.useEffect(() => {
    setPathname(location.pathname);
  }, []);

  return (
    <Wrapper>
      <NavWrapper>
        <Navigation>
          <ListItem>
            <LinkItem localLocation={localLocation === "/work/day"} to={`${url}/day`}>{t('work.work.day')}</LinkItem>
          </ListItem>
          <ListItem>
            <LinkItem localLocation={localLocation === "/work/managment"} style={{display: date ? 'block' : 'none'}} to={`${url}/managment`}>{t('work.work.managment')}</LinkItem>
          </ListItem>
        </Navigation>
      </NavWrapper>

      <Switch>
        <Route exact path={path}>
          <InfoElement>{t('work.work.info')}</InfoElement>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic setLocation={setLocalLocation} />
        </Route>
      </Switch>

    </Wrapper>
  );
};

Work.propTypes = {
  date: PropTypes.string.isRequired,
  setPathname: PropTypes.func,
}

const mapStateToProps = (state) => ({
  date: state.dayOfWork.date,
});

export default connect(mapStateToProps, {})(withTranslation()(Work));
