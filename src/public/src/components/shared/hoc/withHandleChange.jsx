import React from 'react';

const withHandleChange = (WrappedComponent) =>
  (props) => {
    const handleChange = (e, setForm, form) => {
      const { name, value } = e.target;
      setForm({
        ...form,
        [name]: value,
      });
    };
    return <WrappedComponent {...props} handleChange={handleChange}/>;
  };

export default withHandleChange;
