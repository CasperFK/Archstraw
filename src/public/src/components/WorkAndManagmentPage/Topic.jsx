import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import Management from './Management';
import NewDay from './Day';

const Topic = ({ setLocation }) => {
  const { topicId } = useParams();

  const TopicBody = () => {
    switch (topicId) {
      case 'day':
        return <NewDay setLocation={setLocation} />;
      case 'managment':
        return <Management setLocation={setLocation} />;
      default:
        return <div>Wyloguj się i spróbuj ponownie.</div>;
    }
  };

  return <div>{TopicBody()}</div>;
};

Topic.propTypes = {
  setLocation: PropTypes.func,
};

export default Topic;
