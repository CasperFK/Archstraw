import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

import Management from './Management';
import NewDay from './Day';
import Create from './Employee/modules/CreateEmployee';
import withHandleChange from '../shared/hoc/withHandleChange';

const CreateWithHandleChange = compose(withHandleChange)(Create);

const Topic = ({ setLocation }) => {
  const { topicId } = useParams();

  const TopicBody = () => {
    switch (topicId) {
      case 'day':
        return <NewDay setLocation={setLocation} />;
      case 'managment':
        return <Management setLocation={setLocation} />;
      default:
        return <CreateWithHandleChange />;
    }
  };

  return (
    <div>
      {TopicBody()}
    </div>
  );
};

Topic.propTypes = {
  setLocation: PropTypes.func,
}

export default Topic;
