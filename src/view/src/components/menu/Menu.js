import React from 'react';
import MenuApp from './MenuApp';
import Form from './Form';
import { connect } from 'react-redux';

const MainPage = (props) => {
  return (
    <div>
      {props.formFlag ? <MenuApp /> : <Form />}
    </div>
  );
}

const mapStateToProps = state => ({
  formFlag: state.signIn.formFlag,
})

export default connect(mapStateToProps, {})(MainPage);