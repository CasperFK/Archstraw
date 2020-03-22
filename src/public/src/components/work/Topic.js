import React from 'react';
import { useParams } from 'react-router-dom';
import Managment from './Managment';
import NewDay from './NewDay';
import Create from './Create';
import withHandleChange from '../shared/hoc/withHandleChange';
import { compose } from 'redux';

const CreateWithHandleChange = compose(withHandleChange)(Create);

const Topic = () => {
  let { topicId } = useParams();

  return (
    <div>
      {topicId === 'day' ? (
        <NewDay />
      ) : topicId === 'managment' ? (
        <Managment />
      ) : (
        <CreateWithHandleChange />
      )}
    </div>
  );
};

export default Topic;
