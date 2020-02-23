import React, { Component } from "react";
import { Reset } from 'styled-reset';
import { PageApp } from './PageApp';
import MainPage from './components/menu/Menu';

class App extends Component {
  render() {
    return (
      <>
        <Reset />
        <PageApp title="Archstraw" />
        <MainPage />
      </>
    )
  }
}

export default App;