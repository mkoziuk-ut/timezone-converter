import React, { Component } from 'react';
import DashboardHeader from './components/DashboardHeader';
import Pages from './containers/Pages';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <DashboardHeader />
        <Pages />
      </div>
    );
  }
}

export default App;
