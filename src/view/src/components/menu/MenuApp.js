import React from 'react';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';

const MenuApp = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props.changeIncorrect();
  }
  return (
    <div>
      <button onClick={handleClick}>Wyloguj</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  changeIncorrect: () => dispatch(actions.changeIncorrect()),
})

export default connect(null, mapDispatchToProps)(MenuApp);