import React from 'react'
import { useParams } from 'react-router-dom';
import Managment from './Managment';
import NewDay from './NewDay';
import Create from './Create';


const Topic = () => {
  let { topicId } = useParams();

  return (
    <div>
      {topicId === "day" ? <NewDay /> : topicId === "managment" ? <Managment /> : <Create />}
    </div>
  )
}

export default Topic;