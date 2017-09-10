import React, { Component } from 'react';
import Dashboard from './containers/Dashboard';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Dashboard />
      </div>
    );
  }
}

export default App;
