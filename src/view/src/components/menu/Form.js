import React from 'react';
import ErrorMessage from './ErrorMesage';
import { connect } from 'react-redux';
import actions from '../../app/signIn/duck/actions';

const Form = (props) => {
  const [error, setError] = React.useState(null);
  const [form, setForm] = React.useState({
    login: '',
    password: ''
  });

  const validate = (formData, login, pass) => {
    if (formData.login !== login) {
      return "Nie poprawny login";
    } else if (formData.password !== pass) {
      return "Nie poprawne hasło";
    }
    return null;
  }

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("./data.json")
      .then(response => response.json())
      .then(response => {
        const errorMsg = validate(form, response.admin.login, response.admin.pass);
        if (errorMsg) {
          setError(errorMsg)
          props.changeIncorrect();
        }
        else if (errorMsg === null) {
          props.changeCorrect();
        }
      });
  }

  return (
    <form>
      <p>{props.counter}</p>
      {error && <ErrorMessage text={error} />}
      <label>
        <span>Login:</span>
        <input
          name="login"
          value={form.login}
          type="text"
          onChange={handleChange} />
      </label>
      <label>
        <span>Hasło:</span>
        <input
          name="password"
          value={form.password}
          type="password"
          onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>zaloguj</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  changeCorrect: () => dispatch(actions.changeCorrect()),
  changeIncorrect: () => dispatch(actions.changeIncorrect())
});


export default connect(null, mapDispatchToProps)(Form);