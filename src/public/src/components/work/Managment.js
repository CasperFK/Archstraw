import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CurrentDay, Title, AddEmployer} from './styles/style';
import { useHistory } from 'react-router-dom';

const Managment = ({currentDay, date}) => {
  let history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/create/');
  };
  return (
    <>
      {date !== "" ? <CurrentDay>
        <Title>
          {`Dzisiejszy dzień pracy to ${currentDay[0].date}, a stawka dnia wynosi ${currentDay[0].ratio}zł.`}
        </Title>
        <AddEmployer onClick={handleClick}>Dodaj pracownika</AddEmployer>
      </CurrentDay> : ""}
    </>
  )
}

Managment.propTypes = {
  currentDay: PropTypes.array,
  date: PropTypes.string,
}

const mapStateToProps = state => ({
  currentDay: state.dayOfWork.listOfDays.filter(item => item.date === state.dayOfWork.date),
  date: state.dayOfWork.date,
})

export default connect(mapStateToProps, {})(Managment);