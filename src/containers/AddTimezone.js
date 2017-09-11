/* eslint-disable */
import React from 'react';
import moment from 'moment-timezone';
import Select from 'react-select';
import styles from './AddTimezone.css';

class AddTimezone extends React.Component {

  addTimezone(val) {
    console.log("Selected: " + JSON.stringify(val));
  }

  render() {
    var options = moment.tz.names().map( (tz) => {
      return {
        value: tz,
        label: tz.replace('_',' '),
      };
    });

    return (
      <div className={styles.container}>
        Select timezone to add
        <Select
          name="form-field-name"
          value=""
          options={options}
          onChange={this.addTimezone}
        />
      </div>
    );
  }
}

export default AddTimezone;
