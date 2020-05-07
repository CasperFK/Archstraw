import React from 'react';
import { compose } from 'redux';
import { useParams } from 'react-router-dom';

import Managment from './Managment';
import NewDay from './NewDay';
import Create from './CreateEmployee';
import withHandleChange from '../shared/hoc/withHandleChange';

const CreateWithHandleChange = compose(withHandleChange)(Create);

const Topic = () => {
  const { topicId } = useParams();

  const TopicBody = () => {
    switch (topicId) {
      case 'day':
        return <NewDay />;
      case 'managment':
        return <Managment />;
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

export default Topic;
