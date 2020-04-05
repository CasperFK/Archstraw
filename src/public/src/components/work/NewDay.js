import React from 'react';
import { connect } from 'react-redux';
import actions from '../../app/work/duck/actions';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { withTranslation, useTranslation } from 'react-i18next';

const NewDay = ({ createDay }) => {
  const { t } = useTranslation();

  let history = useHistory();
  const [form, setForm] = React.useState({
    date: '',
    ratio: 1,
  });

  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (form.date !== '') {
      createDay(form);
      setForm({
        ...form,
        date: '',
        ratio: 1,
      });
    }
    history.push('/work/managment');
  };

  return (
    <form>
      <label>
        <span>{t('work.newDay.data')}</span>
        <input
          name="date"
          value={form.date}
          type="date"
          onChange={handleChange}
        />
      </label>
      <label>
        <span>{t('work.newDay.ratioTitle')}</span>
        <input
          name="ratio"
          value={form.ratio}
          type="number"
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSubmit}>{t('work.newDay.create')}</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createDay: value => dispatch(actions.createDay(value)),
});

NewDay.propTypes = {
  createDay: PropTypes.func,
}

export default connect(null, mapDispatchToProps)(withTranslation()(NewDay));
