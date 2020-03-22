import React from 'react';
import MenuApp from './MenuApp';
import Form from './Form';
import { connect } from 'react-redux';
import withHandleChange from '../shared/hoc/withHandleChange';
import withValidate from '../shared/hoc/withValidate';
import { compose } from "redux";

const FormWithHandleChange = compose(
  withHandleChange,
  withValidate
)(Form);

const MainPage = (props) => {
  return (
    <div>
      {props.formFlag ? <MenuApp /> : <FormWithHandleChange />}
    </div>
  );
}

const mapStateToProps = state => ({
  formFlag: state.signIn.formFlag,
})

export default connect(mapStateToProps, {})(MainPage);