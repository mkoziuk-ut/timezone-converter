import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DashboardHeader.css';

class DashboardHeader extends React.Component {
  render() {
    return (
      <div className={`${styles.container} fixed z2 top-0 left-0 right-0 flex items-center`}>
        <div className="flex-auto">Timezone dashboard</div>
        <Link to="/add">Add timezone</Link>
      </div>
    );
  }
}

export default DashboardHeader;
