import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const CurrentDay = styled.div`
  padding: 10px;
  text-align: center;
`;

const AddEmployer = styled.button`
  padding: 5px;
  width: 130px;
  text-align:center;
  border: 1px solid black;
  background-color: #ffffff;
`;

const Title = styled.h1`
  margin: 10px 0;
  font-size: 20px;
`;

const Managment = (props) => {
  let history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/create/');
  }
  return (
    <>
      {props.date !== "" ? <CurrentDay>
        <Title>
          {`Dzisiejszy dzień pracy to ${props.currentDay[0].date}, a stawka dnia wynosi ${props.currentDay[0].ratio}zł.`}
        </Title>
        <AddEmployer onClick={handleClick}>Dodaj pracownika</AddEmployer>
      </CurrentDay> : ""}
    </>
  )
}

const mapStateToProps = state => ({
  currentDay: state.dayOfWork.listOfDays.filter(item => {
    return item.date === state.dayOfWork.date
  }),
  date: state.dayOfWork.date,
})

export default connect(mapStateToProps, {})(Managment);