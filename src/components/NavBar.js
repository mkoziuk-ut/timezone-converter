import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

const DashboardHeader = () => (
  <div className={`${styles.container} fixed z2 top-0 left-0 right-0 flex items-center`}>
    <div className="flex-auto">
      <Link to="/">Timezone dashboard</Link>
    </div>
    <ul>
      <li><Link to="/add">Add timezone</Link></li>
    </ul>
  </div>
);

export default DashboardHeader;
