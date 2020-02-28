import React from 'react';
import { connect } from 'react-redux';
import actions from '../../app/work/duck/actions';
import { useHistory } from 'react-router-dom';

const NewDay = (props) => {
  let history = useHistory();
  const [form, setForm] = React.useState({
    date: '',
    ratio: 1
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.createDay(form);
    setForm({
      ...form,
      date: '',
      ratio: 1
    });
    history.push('/work/managment');
  }

  return (
    <form>
      <label>
        <span>Data</span>
        <input name="date" value={form.date} type="date" onChange={handleChange} />
      </label>
      <label>
        <span>Stawka dnia</span>
        <input name="ratio" value={form.ratio} type="number" onChange={handleChange} />
      </label>
      <button onClick={handleSubmit}>Utwórz</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => ({
  createDay: (value) => dispatch(actions.createDay(value)),
})

export default connect(null, mapDispatchToProps)(NewDay);