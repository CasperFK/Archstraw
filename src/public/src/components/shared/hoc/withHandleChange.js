import React, { Component } from 'react'

const withHandleChange = (WrappedComponent) => {
  return class extends Component { // eslint-disable-lines
    handleChange(e, setForm, form) {
      const name = e.target.name;
      const value = e.target.value;
      setForm({
        ...form,
        [name]: value,
      })
    }
    render() {
      return <WrappedComponent {...this.props} handleChange={this.handleChange} />
    }
  }
}

export default withHandleChange;
