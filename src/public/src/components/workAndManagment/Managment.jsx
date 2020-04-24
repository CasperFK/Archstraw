import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';
import {
  CurrentDay,
  Title,
  AddEmployer,
  ChooseFromSelect,
  OptionContainer,
  Container,
} from './styles/style';

const Managment = ({ date, ratio, employess }) => {
  const { t } = useTranslation();

  const history = useHistory();
  const handleClick = e => {
    e.preventDefault();
    history.push('/work/create/');
  };
  return (
    <>
      {date !== '' ? (
        <CurrentDay>
          <Title>
            {`${t('work.managment.currentDate')} ${date} ${t(
              'work.managment.ratio',
            )} ${ratio} ${t('work.managment.currency')}`}
          </Title>
          <Container special>
            <AddEmployer onClick={handleClick}>
              {t('work.managment.addEmployer')}
            </AddEmployer>
            <Container>
              <ChooseFromSelect>
                {t('work.managment.chooseFromSelect')}
              </ChooseFromSelect>
              <OptionContainer name="choice">
                <option value="first">First Value</option>
                <option value="second" selected>
                  Second Value
                </option>
                <option value="third">Third Value</option>
              </OptionContainer>
              <AddEmployer>
                {t('work.managment.accept')}
              </AddEmployer>
            </Container>
          </Container>
          <AddEmployer fullWidth>
            {t('work.managment.end')}
          </AddEmployer>
        </CurrentDay>
      ) : (
        ''
      )}
    </>
  );
};

Managment.propTypes = {
  date: PropTypes.string.isRequired,
  ratio: PropTypes.number.isRequired,
  employess: PropTypes.shape({
    name: PropTypes.string,
    surname: PropTypes.string,
    phoneNumber: PropTypes.string,
    startWork: PropTypes.string,
    endWork: PropTypes.string,
    state: PropTypes.number,
    date: PropTypes.string
  })
};

const mapStateToProps = (state) => ({
  date: state.dayOfWork.date,
  ratio: state.dayOfWork.ratio,
  employess: state.employer.employess,
});

export default connect(mapStateToProps, {})(withTranslation()(Managment));
