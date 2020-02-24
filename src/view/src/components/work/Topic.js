import React from 'react'
import { useParams } from 'react-router-dom';
import Managment from './Managment';
import NewDay from './NewDay';


const Topic = () => {
  let { topicId } = useParams();

  return (
    <div>
      {topicId === "day" ? <NewDay /> : <Managment />}
    </div>
  )
}

export default Topic;