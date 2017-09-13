import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Dashboard from './containers/Dashboard';
import AddTimezone from './containers/AddTimezone';

import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/add" component={AddTimezone} />
        </Switch>
      </div>
    );
  }
}

export default App;
