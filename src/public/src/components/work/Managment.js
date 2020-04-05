import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { CurrentDay, Title, AddEmployer } from './styles/style';
import { useHistory } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

const Managment = ({ currentDay, date }) => {
  const { t } = useTranslation();

  let history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/create/');
  };
  return (
    <>
      {date !== "" ? <CurrentDay>
        <Title>
          {`${t('work.managment.currentDate')} ${currentDay[0].date} ${t('work.managment.ratio')} ${currentDay[0].ratio} ${t('work.managment.currency')}`}
        </Title>
        <AddEmployer onClick={handleClick}>{t('work.managment.addEmployer')}</AddEmployer>
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
});

export default connect(mapStateToProps, {})(withTranslation()(Managment));