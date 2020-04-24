import React from 'react';

const withValidate = (WrappedComponent) => (props) => {
  const validate = (log) => {
    switch (log) {
      case 'email':
        return 'Zły login';
      case 'password':
        return 'Złe hasło';
      default:
        return null;
    }
  };

  return <WrappedComponent {...props} validate={validate} />;
};

export default withValidate;
