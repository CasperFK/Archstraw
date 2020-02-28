import React, { Component } from 'react';

const withValidate = (WrappedComponent) => {
  return class extends Component {
    validate(formData, login, pass) {
      if (formData.login !== login) {
        return "Nie poprawny login";
      } else if (formData.password !== pass) {
        return "Nie poprawne hasło";
      }
      return null;
    }
    render() {
      return <WrappedComponent {...this.props} validate={this.validate} />
    }
  }
}

export default withValidate;
