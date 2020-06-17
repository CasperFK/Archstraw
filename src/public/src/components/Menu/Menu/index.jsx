import React  from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import MenuApp from './modules/Menu';
import Form from '../LoginForm';

const MainPage = ({ formFlag }) => (
  <div>{formFlag ? <MenuApp /> : <Form />}</div>
);

MainPage.propTypes = {
  formFlag: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  formFlag: state.signIn.formFlag,
});


export default connect(mapStateToProps, {})(MainPage);
