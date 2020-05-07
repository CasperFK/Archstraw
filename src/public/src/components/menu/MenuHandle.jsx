import React from 'react';
import PropTypes from 'prop-types';
import MenuApp from './Menu';
import Form from './LoginForm';
import { connect } from 'react-redux';
import withHandleChange from '../shared/hoc/withHandleChange';
import withValidate from '../shared/hoc/withValidate';
import { compose } from 'redux';

const FormWithHandleChange = compose(withHandleChange, withValidate)(Form);

const MainPage = ({ formFlag }) => {
  return <div>{formFlag ? <MenuApp /> : <FormWithHandleChange />}</div>;
};

MainPage.propTypes = {
  setLocation: PropTypes.func,
  formFlag: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  formFlag: state.signIn.formFlag,
});

export default connect(mapStateToProps, {})(MainPage);
