import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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

const Work = ({ date }) => {
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
            <LinkItem style={{display: date ? 'block' : 'none'}} to={`${url}/managment`}>{t('work.work.managment')}</LinkItem>
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

Work.propTypes = {
  date: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  date: state.dayOfWork.date,
});

export default connect(mapStateToProps, {})(withTranslation()(Work));
